// @flow
import React, { Component } from 'react';
import { passwordStrength } from 'check-password-strength';
import { v4 as uid } from 'uuid';

import Select from './Select';
import styles from './PastelID.module.css';
import cstyles from './Common.module.css';
import List from './List';
import ListItem from './ListItem';
import LoadingOverlay from './LoadingOverlay';
import { AddressBalance, SinglePastelID } from './AppState';

type PassphraseValidation = {
  value: string,
  id: number
};

type State = {
  passphrase: string,
  selectedAddress: OptionType,
  loading: boolean,
  passphraseValidation: PassphraseValidation
};

type Props = {
  addressesWithBalance: AddressBalance[],
  getPastelIDs: () => void,
  createNewAddress: (zaddress: boolean) => void,
  createNewPastelID: (passphrase: string) => PastelID,
  pastelIDs: SinglePastelID[]
};

function passphraseStatusColor(validation: PassphraseValidation) {
  const colors = [cstyles.red, cstyles.yellow, cstyles.yellow, cstyles.green];

  console.log(validation.id, colors[validation.id]);

  if (!colors[validation.id]) {
    return cstyles.red;
  }

  return colors[validation.id];
}

export default class PastelID extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      passphrase: '',
      selectedAddress: '',
      loading: false,
      passphraseValidation: {
        id: 0,
        value: 'Too weak'
      }
    };
  }

  componentDidMount() {
    const { getPastelIDs } = this.props;
    getPastelIDs();
  }

  onPassphraseChange(e) {
    const passphrase = e.target.value;
    const validation: PassphraseValidation = passwordStrength(passphrase);

    this.setState({
      passphrase,
      passphraseValidation: validation
    });
  }

  onAddressChange(selectedOption: OptionType) {
    this.setState({ selectedAddress: selectedOption.value });
  }

  async onCreate() {
    const { passphrase, selectedAddress } = this.state;
    const { createNewAddress, createNewPastelID } = this.props;

    if (!this.valid) {
      return;
    }

    this.setState({ loading: true });

    if (!selectedAddress) {
      const newAddress = await createNewAddress(false);
      const newSelectedAddress: OptionType = {
        value: newAddress,
        label: newAddress
      };

      this.setState({
        selectedAddress: newSelectedAddress
      });
    }

    await createNewPastelID(passphrase);

    this.setState({ loading: false });
  }

  get valid(): boolean {
    const { passphraseValidation } = this.state;

    return passphraseValidation.id === 3; // Strong
  }

  render() {
    const { addressesWithBalance, pastelIDs } = this.props;
    const { loading, passphraseValidation, passphrase } = this.state;

    return (
      <>
        <div className={[cstyles.xlarge, cstyles.padall, cstyles.center].join(' ')}>Pastel ID</div>
        <div className={styles.container}>
          <LoadingOverlay loading={loading}>
            <div className={cstyles.well}>
              <div className={cstyles.flexspacebetween}>
                <div className={cstyles.sublight}>Enter a secure passphrase for this Pastel ID</div>
                <div className={cstyles.validationerror}>
                  {passphrase && (
                    <span className={passphraseStatusColor(passphraseValidation)}>{passphraseValidation.value}</span>
                  )}
                </div>
              </div>

              <input
                type="text"
                className={[cstyles.inputbox, cstyles.margintopsmall].join(' ')}
                onChange={this.onPassphraseChange.bind(this)}
                placeholder="Passphrase"
              />

              <div className={[cstyles.verticalflex, cstyles.margintoplarge].join(' ')}>
                <div className={[cstyles.sublight, cstyles.padbottomsmall].join(' ')}>
                  Select an address to pay for this PastelID. If no address is selected, a new one will be created
                </div>
                <Select options={addressesWithBalance} onChange={this.onAddressChange.bind(this)} />
              </div>

              <div className={cstyles.margintoplarge}>
                <button
                  type="button"
                  disabled={!this.valid}
                  className={[cstyles.primarybutton, cstyles.margintoplarge, styles.button].join(' ')}
                  onClick={this.onCreate.bind(this)}
                >
                  Create
                </button>
              </div>
            </div>
          </LoadingOverlay>

          {pastelIDs.length > 0 && (
            <List title="Pastel ID">
              {pastelIDs.map(item => (
                <ListItem key={uid()} title={item.pastelid} />
              ))}
            </List>
          )}

          {pastelIDs.length === 0 && (
            <div className={cstyles.margintoplarge}>There are currently no Pastel IDs generated.</div>
          )}
        </div>
      </>
    );
  }
}
