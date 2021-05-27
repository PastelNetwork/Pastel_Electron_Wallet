import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AppThunk } from '../../redux/store'

export interface IConversationsState {
  isLoading: boolean
  currentConversationId: string | number
  conversations: TConversation[]
}

export type TMessage = {
  id: string | number
  author: string
  message: string
  image: string[]
  record: string
  timestamp: number
}

export type TConversation = {
  id: string | number
  name: string
  thumbnail: string
  lastMessage: string
  messages: TMessage[]
  timestamp: number
}

const initialState: IConversationsState = {
  isLoading: false,
  currentConversationId: '',
  conversations: [],
}

export const MessageStoreSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    updateLoading(state: IConversationsState, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
    updateConversationList(
      state: IConversationsState,
      action: PayloadAction<TConversation[]>,
    ) {
      state.conversations = action.payload.sort(
        (a: TConversation, b: TConversation) => {
          return b.timestamp - a.timestamp
        },
      )
      if (!state.currentConversationId && action.payload[0]) {
        state.currentConversationId = action.payload[0].id
      }
    },
    changeConversation(
      state: IConversationsState,
      action: PayloadAction<string | number>,
    ) {
      state.currentConversationId = action.payload
    },
    sendNewMessage(
      state: IConversationsState,
      action: PayloadAction<TMessage>,
    ) {
      const conversationIndex = state.conversations.findIndex(
        c => c.id === state.currentConversationId,
      )
      if (conversationIndex != -1) {
        state.conversations[conversationIndex].messages.push(action.payload)
        state.conversations[conversationIndex].timestamp =
          action.payload.timestamp
        state.conversations.sort(
          (conversation1: TConversation, conversation2: TConversation) => {
            return conversation2.timestamp - conversation1.timestamp
          },
        )
      }
    },
  },
})

export const pastelMessageReducer = MessageStoreSlice.reducer

export const {
  updateLoading,
  updateConversationList,
  sendNewMessage,
  changeConversation,
} = MessageStoreSlice.actions

export function fetchConversations(): AppThunk {
  return dispatch => {
    try {
      const data = [
        {
          id: 'id1',
          name: 'Hanh Tran',
          thumbnail: 'https://randomuser.me/api/portraits/women/6.jpg',
          lastMessage: 'Hello Thuat Nguyen',
          messages: [
            {
              id: 'id2',
              author: 'orange',
              message: 'Hello Thuat Nguyen',
              image: [],
              record: '',
              timestamp: new Date('5/5/2021').getTime(),
            },
          ],
          timestamp: new Date('5/5/2021').getTime(),
        },
      ]
      dispatch(updateConversationList(data))
    } catch (error) {
      // dispatch(updateLoading(false))
      throw new Error('fetch conversations failed')
    }
  }
}

export function createMessage(
  newMessage: string,
  newImage: string[],
  audio: string,
): AppThunk {
  return dispatch => {
    const message = {
      id: Math.random(),
      author: 'apple',
      message: newMessage,
      image: newImage,
      record: audio,
      timestamp: new Date().getTime(),
    }
    dispatch(sendNewMessage(message))
  }
}
