import "../components/page-panel.js";
import "../components/page-body.js";
import "../components/action-card.js";
import "../components/account-widget.js";
import "../components/text-widget.js";
import "../components/number-widget.js";
import "../components/switch-widget.js";
import "../components/array-widget.js"
import "../components/dictionary-widget.js"

import DappLib from "@decentology/dappstarter-dapplib";
import { LitElement, html, customElement, property } from "lit-element";

@customElement('ft-harness')
export default class FTHarness extends LitElement {
  @property()
  title;
  @property()
  category;
  @property()
  description;

  createRenderRoot() {
    return this;
  }

  constructor(args) {
    super(args);
  }

  render() {
    let content = html`
      <page-body title="${this.title}" category="${this.category}" description="${this.description}">
      
        <action-card title="SimpleFT - Instance" description="Instance. **You need a SimpleFT.Package to do this. **"
          action="SimpleFTInstance" method="post" fields="signer">
          <account-widget field="signer" label="Signer">
          </account-widget>
        </action-card>
      
        <action-card title="SimpleFT - Get Client Tenants" description="Get the client tenants for this account"
          action="SimpleFTGetClientTenants" method="get" fields="account">
          <account-widget field="account" label="Account">
          </account-widget>
        </action-card>
      
        <action-card title="SimpleFT - Give Minter"
          description="Give Minter (Receiving a SimpleFT.Minter). ** 'Recipient' MUST have a SimpleFT.Package **"
          action="SimpleFTGiveMinter" method="post" fields="tenantOwner recipient">
          <account-widget field="tenantOwner" label="Tenant Owner">
          </account-widget>
          <account-widget field="recipient" label="Recipient">
          </account-widget>
        </action-card>
      
        <action-card title="SimpleFT - Mint FT" description="Mint FT" action="SimpleFTMintFT" method="post"
          fields="tenantOwner signer recipient amount">
          <account-widget field="tenantOwner" label="Tenant Owner">
          </account-widget>
          <account-widget field="signer" label="FTMinter">
          </account-widget>
          <account-widget field="recipient" label="Recipient">
          </account-widget>
          <text-widget field="amount" label="Amount of FT" placeholder="50">
          </text-widget>
        </action-card>
      
        <action-card title="SimpleFT - Transfer FT" description="Transfer FT" action="SimpleFTTransferFT" method="post"
          fields="tenantOwner signer recipient amount">
          <account-widget field="tenantOwner" label="Tenant Owner">
          </account-widget>
          <account-widget field="signer" label="Signer">
          </account-widget>
          <account-widget field="recipient" label="Recipient">
          </account-widget>
          <text-widget field="amount" label="Amount of FT" placeholder="50">
          </text-widget>
        </action-card>
      
        <action-card title="SimpleFT - Get Balance" description="Get Balance" action="SimpleFTGetBalance" method="get"
          fields="tenantOwner account">
          <account-widget field="tenantOwner" label="Tenant Owner">
          </account-widget>
          <account-widget field="account" label="Account">
          </account-widget>
        </action-card>
      
      </page-body>
      <page-panel id="resultPanel"></page-panel>
    `;

    return content;
  }
}
