import React from "react";
class Form extends React.Component {
    render () {
        return (
           <form onSubmit={this.props.getWeather}>
            <input type="text" name="state" placeholder="e.g., CA..." />
            <input type="text" name="productType" placeholder="e.g., hemp..." />
            <input type="text" name="qty" placeholder="e.g., 100 lbs." />
            <input type="text" name="date" placeholder="e.g., 03-15-19..." />
            <input type="text" name="quality" placeholder="e.g., thc < 0.3% ..." />
            <input type="text" name="collateral" placeholder="e.g., 103 tokens..." />
            <button>Create Contract</button>

const result = await api.transact({
  actions [{
    account: 'eosio',
    name: 'newaccount',
    authorization: [{
      actor: 'default',
      permission: 'active',
    }],
    data: {
      creator: 'default',
      name: 'newFarmerAccount1',
      owner: {
        threshold: 1,
        keys: [{
          key: 'EOS7MiqgQP82hoRRJh4kxseVDSMdcBkj2DigPmLHN9HeD31Ss2vpZ',
          weight: 1
        }],
        accounts: [],
        waits: []
      },
      active: {
        threshold: 1,
        keys: [{
          key: 'EOS8cnvwdYcGJqjRthPfn1whbsrNPNF2NCsNFqhMJBGXAak33rD61',
          weight: 1
        }],
        accounts: [],
        waits: []
      },
    },
        }]
    }),



<script>
  let pre = document.getElementsByTagName('pre')[0];
  const defaultPrivateKey = "5JorW6meeASm7nAK7CY5vRnsHn8rE3ExK2vVZRNDnWeQDZ2S2Hv";
  const rpc = new eosjs_jsonrpc.default('http://127.0.0.1:8888');
  const signatureProvider = new eosjs_jssig.default([defaultPrivateKey]);
  const api = new eosjs_api.default({ rpc, signatureProvider });

  (async () => {
    try {
      const result = await api.transact({
        actions: [{
            account: 'eosio.token',
            name: 'transfer',
            authorization: [{
                actor: 'useraaaaaaaa',
                permission: 'active',
            }],
            data: {
                from: 'newFarmerAccount1',
                to: 'newFarmerAccount2',
                quantity: '2.0000 HMP',
                memo: '',
            },
        }]
      }, {
        blocksBehind: 3,
        expireSeconds: 30,
      });
      pre.textContent += '\n\nTransaction pushed!\n\n' + JSON.stringify(result, null, 2);
    } catch (e) {
      pre.textContent = '\nCaught exception: ' + e;
      if (e instanceof eosjs_rpcerror.default)
        pre.textContent += '\n\n' + JSON.stringify(e.json, null, 2);
    }
  })();
</script>





           </form>








        )
    }
};

export default Form;
