// Automatically generated with Reach 0.1.11 (a9f7613d)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (a9f7613d)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      2: [ctc0, ctc0, ctc1],
      3: [ctc0, ctc0, ctc1, ctc1],
      5: [ctc0, ctc0, ctc1],
      6: [ctc0],
      8: [ctc0, ctc0, ctc1, ctc1, ctc1, ctc1],
      9: [ctc0, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
      10: [ctc0, ctc0, ctc1, ctc1, ctc1, ctc1],
      11: [ctc0, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
      12: [ctc0, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function InsuranceCompany(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for InsuranceCompany expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for InsuranceCompany expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v183, time: v182, didSend: v22, from: v181 } = txn1;
  ;
  const v186 = stdlib.protect(ctc0, await interact.getControlBalance(), {
    at: './index.rsh:36:72:application',
    fs: ['at ./index.rsh:35:28:application call to [unknown function] (defined at: ./index.rsh:35:32:function exp)'],
    msg: 'getControlBalance',
    who: 'InsuranceCompany'
    });
  const v187 = stdlib.gt(v186, stdlib.checkedBigNumberify('./index.rsh:37:36:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v187, {
    at: './index.rsh:37:15:application',
    fs: ['at ./index.rsh:35:28:application call to [unknown function] (defined at: ./index.rsh:35:32:function exp)'],
    msg: null,
    who: 'InsuranceCompany'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v181, v186],
    evt_cnt: 1,
    funcNum: 1,
    lct: v182,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:39:24:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v189], secs: v191, time: v190, didSend: v32, from: v188 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v189], secs: v191, time: v190, didSend: v32, from: v188 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v198], secs: v200, time: v199, didSend: v44, from: v197 } = txn3;
  ;
  const v201 = stdlib.addressEq(v181, v197);
  stdlib.assert(v201, {
    at: './index.rsh:47:18:dot',
    fs: [],
    msg: 'sender correct',
    who: 'InsuranceCompany'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v204, time: v203, didSend: v49, from: v202 } = txn4;
  ;
  const v205 = stdlib.addressEq(v181, v202);
  stdlib.assert(v205, {
    at: './index.rsh:67:18:dot',
    fs: [],
    msg: 'sender correct',
    who: 'InsuranceCompany'
    });
  let v207 = stdlib.checkedBigNumberify('./index.rsh:70:49:decimal', stdlib.UInt_max, '0');
  let v208 = stdlib.checkedBigNumberify('./index.rsh:70:46:decimal', stdlib.UInt_max, '0');
  let v209 = v203;
  let v216 = stdlib.checkedBigNumberify('./index.rsh:29:36:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v218 = stdlib.eq(v208, stdlib.checkedBigNumberify('./index.rsh:72:25:decimal', stdlib.UInt_max, '0'));
    
    return v218;})()) {
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 7,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v226], secs: v228, time: v227, didSend: v70, from: v225 } = txn5;
    ;
    const v229 = stdlib.addressEq(v181, v225);
    stdlib.assert(v229, {
      at: './index.rsh:87:20:dot',
      fs: [],
      msg: 'sender correct',
      who: 'InsuranceCompany'
      });
    const v236 = stdlib.add(v227, stdlib.checkedBigNumberify('./index.rsh:33:19:decimal', stdlib.UInt_max, '2'));
    await ctc.waitUntilTime(v236);
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 8,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v240, time: v239, didSend: v89, from: v238 } = txn6;
    const v242 = stdlib.add(v216, v198);
    ;
    const v243 = stdlib.addressEq(v181, v238);
    stdlib.assert(v243, {
      at: './index.rsh:93:20:dot',
      fs: [],
      msg: 'sender correct',
      who: 'InsuranceCompany'
      });
    const txn7 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 9,
      out_tys: [ctc1, ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v255, v256], secs: v258, time: v257, didSend: v107, from: v254 } = txn7;
    ;
    const v259 = stdlib.addressEq(v181, v254);
    stdlib.assert(v259, {
      at: './index.rsh:103:20:dot',
      fs: [],
      msg: 'sender correct',
      who: 'InsuranceCompany'
      });
    const v261 = stdlib.le(v256, v242);
    stdlib.assert(v261, {
      at: './index.rsh:104:16:application',
      fs: [],
      msg: null,
      who: 'InsuranceCompany'
      });
    const v265 = stdlib.protect(ctc1, await interact.approveUserRequest(v242, v255, v256), {
      at: './index.rsh:108:68:application',
      fs: ['at ./index.rsh:107:30:application call to [unknown function] (defined at: ./index.rsh:107:34:function exp)'],
      msg: 'approveUserRequest',
      who: 'InsuranceCompany'
      });
    
    const txn8 = await (ctc.sendrecv({
      args: [v181, v188, v189, v198, v207, v242, v256, v265],
      evt_cnt: 1,
      funcNum: 10,
      lct: v257,
      onlyIf: true,
      out_tys: [ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:110:26:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn8) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v267], secs: v269, time: v268, didSend: v120, from: v266 } = txn8;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [v267], secs: v269, time: v268, didSend: v120, from: v266 } = txn8;
    ;
    const v270 = stdlib.addressEq(v188, v266);
    stdlib.assert(v270, {
      at: './index.rsh:110:26:dot',
      fs: [],
      msg: 'sender correct',
      who: 'InsuranceCompany'
      });
    const txn9 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 11,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v275], secs: v277, time: v276, didSend: v130, from: v274 } = txn9;
    ;
    const v278 = stdlib.addressEq(v181, v274);
    stdlib.assert(v278, {
      at: './index.rsh:125:20:dot',
      fs: [],
      msg: 'sender correct',
      who: 'InsuranceCompany'
      });
    const v279 = stdlib.ge(v275, v189);
    if (v279) {
      if (v267) {
        const v283 = stdlib.sub(v242, v256);
        ;
        const v284 = stdlib.add(v207, stdlib.checkedBigNumberify('./index.rsh:134:65:decimal', stdlib.UInt_max, '1'));
        const cv207 = v284;
        const cv208 = stdlib.checkedBigNumberify('./index.rsh:134:47:decimal', stdlib.UInt_max, '0');
        const cv209 = v276;
        const cv216 = v283;
        
        v207 = cv207;
        v208 = cv208;
        v209 = cv209;
        v216 = cv216;
        
        continue;}
      else {
        const v285 = stdlib.add(v207, stdlib.checkedBigNumberify('./index.rsh:134:65:decimal', stdlib.UInt_max, '1'));
        const cv207 = v285;
        const cv208 = stdlib.checkedBigNumberify('./index.rsh:134:47:decimal', stdlib.UInt_max, '0');
        const cv209 = v276;
        const cv216 = v242;
        
        v207 = cv207;
        v208 = cv208;
        v209 = cv209;
        v216 = cv216;
        
        continue;}}
    else {
      const cv207 = v207;
      const cv208 = stdlib.checkedBigNumberify('./index.rsh:137:47:decimal', stdlib.UInt_max, '1');
      const cv209 = v276;
      const cv216 = v242;
      
      v207 = cv207;
      v208 = cv208;
      v209 = cv209;
      v216 = cv216;
      
      continue;}
    
    
    
    
    
    
    
    
    
    }
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 5,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v290], secs: v292, time: v291, didSend: v146, from: v289 } = txn5;
  ;
  const v293 = stdlib.addressEq(v181, v289);
  stdlib.assert(v293, {
    at: './index.rsh:148:18:dot',
    fs: [],
    msg: 'sender correct',
    who: 'InsuranceCompany'
    });
  ;
  const v301 = stdlib.protect(ctc0, await interact.getInsuranceCompanyBalance(), {
    at: './index.rsh:153:95:application',
    fs: ['at ./index.rsh:152:28:application call to [unknown function] (defined at: ./index.rsh:152:32:function exp)'],
    msg: 'getInsuranceCompanyBalance',
    who: 'InsuranceCompany'
    });
  
  const txn6 = await (ctc.sendrecv({
    args: [v188, v301],
    evt_cnt: 1,
    funcNum: 6,
    lct: v291,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:155:24:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn6) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v303], secs: v305, time: v304, didSend: v161, from: v302 } = txn6;
      
      ;
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v303], secs: v305, time: v304, didSend: v161, from: v302 } = txn6;
  ;
  const v306 = stdlib.addressEq(v188, v302);
  stdlib.assert(v306, {
    at: './index.rsh:155:24:dot',
    fs: [],
    msg: 'sender correct',
    who: 'InsuranceCompany'
    });
  return;
  
  };
export async function Subscriber(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Subscriber expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Subscriber expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Object({
    isRequested: ctc2,
    requestedPayment: ctc0
    });
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:30:18:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:30:18:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v183, time: v182, didSend: v22, from: v181 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v183, time: v182, didSend: v22, from: v181 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v189], secs: v191, time: v190, didSend: v32, from: v188 } = txn2;
  ;
  const v194 = stdlib.protect(ctc0, await interact.getPayment(), {
    at: './index.rsh:43:55:application',
    fs: ['at ./index.rsh:42:22:application call to [unknown function] (defined at: ./index.rsh:42:26:function exp)'],
    msg: 'getPayment',
    who: 'Subscriber'
    });
  const v195 = stdlib.gt(v194, stdlib.checkedBigNumberify('./index.rsh:44:26:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v195, {
    at: './index.rsh:44:15:application',
    fs: ['at ./index.rsh:42:22:application call to [unknown function] (defined at: ./index.rsh:42:26:function exp)'],
    msg: null,
    who: 'Subscriber'
    });
  const v196 = stdlib.gt(v189, v194);
  stdlib.assert(v196, {
    at: './index.rsh:45:15:application',
    fs: ['at ./index.rsh:42:22:application call to [unknown function] (defined at: ./index.rsh:42:26:function exp)'],
    msg: null,
    who: 'Subscriber'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v181, v188, v189, v194],
    evt_cnt: 1,
    funcNum: 2,
    lct: v190,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:47:18:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v198], secs: v200, time: v199, didSend: v44, from: v197 } = txn3;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc4, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v198], secs: v200, time: v199, didSend: v44, from: v197 } = txn3;
  ;
  const v201 = stdlib.addressEq(v181, v197);
  stdlib.assert(v201, {
    at: './index.rsh:47:18:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Subscriber'
    });
  const txn4 = await (ctc.sendrecv({
    args: [v181, v188, v189, v198],
    evt_cnt: 0,
    funcNum: 3,
    lct: v199,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v204, time: v203, didSend: v49, from: v202 } = txn4;
      
      ;
      const v207 = stdlib.checkedBigNumberify('./index.rsh:70:49:decimal', stdlib.UInt_max, '0');
      const v208 = stdlib.checkedBigNumberify('./index.rsh:70:46:decimal', stdlib.UInt_max, '0');
      const v209 = v203;
      const v216 = stdlib.checkedBigNumberify('./index.rsh:29:36:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v218 = stdlib.eq(v208, stdlib.checkedBigNumberify('./index.rsh:72:25:decimal', stdlib.UInt_max, '0'));
        
        return v218;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc4, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v204, time: v203, didSend: v49, from: v202 } = txn4;
  ;
  const v205 = stdlib.addressEq(v181, v202);
  stdlib.assert(v205, {
    at: './index.rsh:67:18:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Subscriber'
    });
  let v207 = stdlib.checkedBigNumberify('./index.rsh:70:49:decimal', stdlib.UInt_max, '0');
  let v208 = stdlib.checkedBigNumberify('./index.rsh:70:46:decimal', stdlib.UInt_max, '0');
  let v209 = v203;
  let v216 = stdlib.checkedBigNumberify('./index.rsh:29:36:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v218 = stdlib.eq(v208, stdlib.checkedBigNumberify('./index.rsh:72:25:decimal', stdlib.UInt_max, '0'));
    
    return v218;})()) {
    const v221 = stdlib.add(v207, stdlib.checkedBigNumberify('./index.rsh:78:52:decimal', stdlib.UInt_max, '1'));
    stdlib.protect(ctc1, await interact.showPaymentCount(v221), {
      at: './index.rsh:78:36:application',
      fs: ['at ./index.rsh:77:24:application call to [unknown function] (defined at: ./index.rsh:77:28:function exp)'],
      msg: 'showPaymentCount',
      who: 'Subscriber'
      });
    
    const v224 = stdlib.protect(ctc0, await interact.getSubscriberBalanceBeforePayment(), {
      at: './index.rsh:84:98:application',
      fs: ['at ./index.rsh:83:24:application call to [unknown function] (defined at: ./index.rsh:83:28:function exp)'],
      msg: 'getSubscriberBalanceBeforePayment',
      who: 'Subscriber'
      });
    
    const txn5 = await (ctc.sendrecv({
      args: [v181, v188, v189, v198, v207, v216, v224],
      evt_cnt: 1,
      funcNum: 7,
      lct: v209,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:87:20:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v226], secs: v228, time: v227, didSend: v70, from: v225 } = txn5;
        
        ;
        const v236 = stdlib.add(v227, stdlib.checkedBigNumberify('./index.rsh:33:19:decimal', stdlib.UInt_max, '2'));
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v226], secs: v228, time: v227, didSend: v70, from: v225 } = txn5;
    ;
    const v229 = stdlib.addressEq(v181, v225);
    stdlib.assert(v229, {
      at: './index.rsh:87:20:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Subscriber'
      });
    const v236 = stdlib.add(v227, stdlib.checkedBigNumberify('./index.rsh:33:19:decimal', stdlib.UInt_max, '2'));
    await ctc.waitUntilTime(v236);
    const txn6 = await (ctc.sendrecv({
      args: [v181, v188, v189, v198, v207, v216, v236],
      evt_cnt: 0,
      funcNum: 8,
      lct: v227,
      onlyIf: true,
      out_tys: [],
      pay: [v198, []],
      sim_p: (async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v240, time: v239, didSend: v89, from: v238 } = txn6;
        
        const v242 = stdlib.add(v216, v198);
        sim_r.txns.push({
          amt: v198,
          kind: 'to',
          tok: undefined /* Nothing */
          });
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v240, time: v239, didSend: v89, from: v238 } = txn6;
    const v242 = stdlib.add(v216, v198);
    ;
    const v243 = stdlib.addressEq(v181, v238);
    stdlib.assert(v243, {
      at: './index.rsh:93:20:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Subscriber'
      });
    const v247 = stdlib.protect(ctc3, await interact.getUserRequest(v242), {
      at: './index.rsh:100:88:application',
      fs: ['at ./index.rsh:99:24:application call to [unknown function] (defined at: ./index.rsh:99:28:function exp)'],
      msg: 'getUserRequest',
      who: 'Subscriber'
      });
    const v248 = v247.isRequested;
    const v249 = v247.requestedPayment;
    const v253 = stdlib.le(v249, v242);
    stdlib.assert(v253, {
      at: './index.rsh:101:17:application',
      fs: ['at ./index.rsh:99:24:application call to [unknown function] (defined at: ./index.rsh:99:28:function exp)'],
      msg: null,
      who: 'Subscriber'
      });
    
    const txn7 = await (ctc.sendrecv({
      args: [v181, v188, v189, v198, v207, v242, v248, v249],
      evt_cnt: 2,
      funcNum: 9,
      lct: v239,
      onlyIf: true,
      out_tys: [ctc2, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:103:20:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn7) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v255, v256], secs: v258, time: v257, didSend: v107, from: v254 } = txn7;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc4, ctc0, ctc0, ctc0, ctc0, ctc2, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v255, v256], secs: v258, time: v257, didSend: v107, from: v254 } = txn7;
    ;
    const v259 = stdlib.addressEq(v181, v254);
    stdlib.assert(v259, {
      at: './index.rsh:103:20:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Subscriber'
      });
    const v261 = stdlib.le(v256, v242);
    stdlib.assert(v261, {
      at: './index.rsh:104:16:application',
      fs: [],
      msg: null,
      who: 'Subscriber'
      });
    const txn8 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 10,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v267], secs: v269, time: v268, didSend: v120, from: v266 } = txn8;
    ;
    const v270 = stdlib.addressEq(v188, v266);
    stdlib.assert(v270, {
      at: './index.rsh:110:26:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Subscriber'
      });
    const v273 = stdlib.protect(ctc0, await interact.getSubscriberBalanceAfterPayment(), {
      at: './index.rsh:122:96:application',
      fs: ['at ./index.rsh:121:24:application call to [unknown function] (defined at: ./index.rsh:121:28:function exp)'],
      msg: 'getSubscriberBalanceAfterPayment',
      who: 'Subscriber'
      });
    
    const txn9 = await (ctc.sendrecv({
      args: [v181, v188, v189, v198, v207, v242, v256, v267, v273],
      evt_cnt: 1,
      funcNum: 11,
      lct: v268,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:125:20:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn9) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v275], secs: v277, time: v276, didSend: v130, from: v274 } = txn9;
        
        ;
        const v279 = stdlib.ge(v275, v189);
        if (v279) {
          if (v267) {
            const v283 = stdlib.sub(v242, v256);
            sim_r.txns.push({
              kind: 'from',
              to: v181,
              tok: undefined /* Nothing */
              });
            const v284 = stdlib.add(v207, stdlib.checkedBigNumberify('./index.rsh:134:65:decimal', stdlib.UInt_max, '1'));
            const cv207 = v284;
            const cv208 = stdlib.checkedBigNumberify('./index.rsh:134:47:decimal', stdlib.UInt_max, '0');
            const cv209 = v276;
            const cv216 = v283;
            
            await (async () => {
              const v207 = cv207;
              const v208 = cv208;
              const v209 = cv209;
              const v216 = cv216;
              
              if (await (async () => {
                const v218 = stdlib.eq(v208, stdlib.checkedBigNumberify('./index.rsh:72:25:decimal', stdlib.UInt_max, '0'));
                
                return v218;})()) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.isHalt = false;
                }})();}
          else {
            const v285 = stdlib.add(v207, stdlib.checkedBigNumberify('./index.rsh:134:65:decimal', stdlib.UInt_max, '1'));
            const cv207 = v285;
            const cv208 = stdlib.checkedBigNumberify('./index.rsh:134:47:decimal', stdlib.UInt_max, '0');
            const cv209 = v276;
            const cv216 = v242;
            
            await (async () => {
              const v207 = cv207;
              const v208 = cv208;
              const v209 = cv209;
              const v216 = cv216;
              
              if (await (async () => {
                const v218 = stdlib.eq(v208, stdlib.checkedBigNumberify('./index.rsh:72:25:decimal', stdlib.UInt_max, '0'));
                
                return v218;})()) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.isHalt = false;
                }})();}}
        else {
          const cv207 = v207;
          const cv208 = stdlib.checkedBigNumberify('./index.rsh:137:47:decimal', stdlib.UInt_max, '1');
          const cv209 = v276;
          const cv216 = v242;
          
          await (async () => {
            const v207 = cv207;
            const v208 = cv208;
            const v209 = cv209;
            const v216 = cv216;
            
            if (await (async () => {
              const v218 = stdlib.eq(v208, stdlib.checkedBigNumberify('./index.rsh:72:25:decimal', stdlib.UInt_max, '0'));
              
              return v218;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.isHalt = false;
              }})();}
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc2, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v275], secs: v277, time: v276, didSend: v130, from: v274 } = txn9;
    ;
    const v278 = stdlib.addressEq(v181, v274);
    stdlib.assert(v278, {
      at: './index.rsh:125:20:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Subscriber'
      });
    const v279 = stdlib.ge(v275, v189);
    if (v279) {
      if (v267) {
        const v283 = stdlib.sub(v242, v256);
        ;
        const v284 = stdlib.add(v207, stdlib.checkedBigNumberify('./index.rsh:134:65:decimal', stdlib.UInt_max, '1'));
        const cv207 = v284;
        const cv208 = stdlib.checkedBigNumberify('./index.rsh:134:47:decimal', stdlib.UInt_max, '0');
        const cv209 = v276;
        const cv216 = v283;
        
        v207 = cv207;
        v208 = cv208;
        v209 = cv209;
        v216 = cv216;
        
        continue;}
      else {
        const v285 = stdlib.add(v207, stdlib.checkedBigNumberify('./index.rsh:134:65:decimal', stdlib.UInt_max, '1'));
        const cv207 = v285;
        const cv208 = stdlib.checkedBigNumberify('./index.rsh:134:47:decimal', stdlib.UInt_max, '0');
        const cv209 = v276;
        const cv216 = v242;
        
        v207 = cv207;
        v208 = cv208;
        v209 = cv209;
        v216 = cv216;
        
        continue;}}
    else {
      const cv207 = v207;
      const cv208 = stdlib.checkedBigNumberify('./index.rsh:137:47:decimal', stdlib.UInt_max, '1');
      const cv209 = v276;
      const cv216 = v242;
      
      v207 = cv207;
      v208 = cv208;
      v209 = cv209;
      v216 = cv216;
      
      continue;}
    
    
    
    
    
    
    
    
    
    }
  const v288 = stdlib.protect(ctc0, await interact.getSubscriberLastBalance(), {
    at: './index.rsh:146:87:application',
    fs: ['at ./index.rsh:145:22:application call to [unknown function] (defined at: ./index.rsh:145:26:function exp)'],
    msg: 'getSubscriberLastBalance',
    who: 'Subscriber'
    });
  
  const txn5 = await (ctc.sendrecv({
    args: [v181, v188, v216, v288],
    evt_cnt: 1,
    funcNum: 5,
    lct: v209,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:148:18:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v290], secs: v292, time: v291, didSend: v146, from: v289 } = txn5;
      
      ;
      sim_r.txns.push({
        kind: 'from',
        to: v188,
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc4, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v290], secs: v292, time: v291, didSend: v146, from: v289 } = txn5;
  ;
  const v293 = stdlib.addressEq(v181, v289);
  stdlib.assert(v293, {
    at: './index.rsh:148:18:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Subscriber'
    });
  ;
  const txn6 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 6,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v303], secs: v305, time: v304, didSend: v161, from: v302 } = txn6;
  ;
  const v306 = stdlib.addressEq(v188, v302);
  stdlib.assert(v306, {
    at: './index.rsh:155:24:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Subscriber'
    });
  return;
  
  
  
  
  
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAQAAFASFBYAggLAwUGCQpgDCYCAQAAIjUAMRhBBYkpZEkiWzUBIQdbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSELDEADHkkhDAxAAdlJIQ0MQAFESSEIDEAAtCEIEkQhDzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKSVcAIDX/VyAgNf4kWzX9JVs1/CEEWzX7IQVbNfohDls1+Uk1BRc1+IAEECMi/zT4FlCwNP8xABJENPg0/Q9BAEQ0A1doARdBACexIrIBNPmyCCOyEDT/sgezNP80/jT9NPw0+yMIIjIGNPo0+QlCBAw0/zT+NP00/DT7IwgiMgY0+kID+DT/NP40/TT8NPsjMgY0+kID5kghCDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKSVcAIDX/VyAgNf4kWzX9JVs1/CEEWzX7IQVbNfohDls1+Uk1BRc1+IAE/JO8UTT4FlEHCFCwNP4xABJENP80/lA0/RZQNPwWUDT7FlA0+hZQNPkWUDT4FlEHCFAoSwFXAGlnSCEPNQEyBjUCQgPUSCENNAESRDQESSISTDQCEhFEKGRJNQNJSkpXACA1/1cgIDX+JFs1/SVbNfwhBFs1+yEFWzX6STUFSVcAARc1+SNbNfiABIX8ZJY0+RZRBwhQNPgWULA0/zEAEkQ0+DT6DkQ0/zT+UDT9FlA0/BZQNPsWUDT6FlA0+BZQKEsBVwBoZ0ghCDUBMgY1AkIDRkmBBwxAAQdJIQcMQACASCEMNAESRDQESSISTDQCEhFEKGRJNQNJSkpXACA1/1cgIDX+JFs1/SVbNfwhBFs1+yEOWzX6gAQX/NsusDIGNPoPRDQDIQVbNPwINfk0/IgDODT/MQASRDT/NP5QNP0WUDT8FlA0+xZQNPkWUChLAVcAYGdIIQ01ATIGNQJCArhIIQc0ARJENARJIhJMNAISEUQoZEk1A0lKSlcAIDX/VyAgNf4kWzX9JVs1/CEEWzX7IQVbNfpJNQUXNfmABHGosaM0+RZQsDT/MQASRDIGIQYINfg0/zT+UDT9FlA0/BZQNPsWUDT6FlA0+BZQKEsBVwBoZ0ghDDUBMgY1AkICOEghCzQBEkQ0BEkiEkw0AhIRRChkNQNJNQUXNf+ABHDt73o0/xZQsDQDMQASREIB7EkhBgxAAQxJIQkMQACnSSEKDEAAXUghCjQBEkQ0BEkiEkw0AhIRRChkSTUDVyAgNf9JNQUXNf6ABIGqms80/hZQsDQDVwAgMQASRLEisgE0AyRbsggjshA0/7IHszT/KEsBVwAgZ0ghCzUBMgY1AkIBliEJEkQhCTQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf+ABKdlxLSwNP8xABJENP80A1cgIDQDJFs0AyVbIiIyBiJCANxIIQY0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf9XICA1/iRbNf1JNQUXNfyABJdO9xc0/BZQsDT/MQASRDT/NP5QNP0WUDT8FlAoSwFXAFBnSCEJNQEyBjUCQgD1SSMMQABFSCM0ARJENARJIhJMNAISEUQoZEk1AzX/STUFFzX+gATVFRkUNP4WULA0/zEAUDT+FlAoSwFXAEhnSCEGNQEyBjUCQgCqSIGgjQaIAPQiNAESRDQESSISTDQCEhFEgARfDav6sDEAKEsBVwAgZ0gjNQEyBjUCQgB3Nf81/jX9Nfw1+zX6Nfk1+DT9IhJBACg0+DT5UDT6FlA0+xZQNPwWUDT/FlAoSwFXAGBnSCEHNQEyBjUCQgA4NPg0+VA0/xZQKEsBVwBIZ0ghCjUBMgY1AkIAHDEZIQoSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhBjE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 105,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v189",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v267",
                "type": "bool"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T27",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v275",
                "type": "uint256"
              }
            ],
            "internalType": "struct T28",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T29",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v198",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v290",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v303",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v226",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v255",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v256",
                "type": "uint256"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v189",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v267",
                "type": "bool"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T27",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v275",
                "type": "uint256"
              }
            ],
            "internalType": "struct T28",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T29",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v198",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v290",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v303",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v226",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v255",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v256",
                "type": "uint256"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002169380380620021698339810160408190526200002691620001a4565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a16200008334156007620000d4565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000cb929190620000fe565b5050506200024c565b81620000fa5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200010c906200020f565b90600052602060002090601f0160209004810192826200013057600085556200017b565b82601f106200014b57805160ff19168380011785556200017b565b828001600101855582156200017b579182015b828111156200017b5782518255916020019190600101906200015e565b50620001899291506200018d565b5090565b5b808211156200018957600081556001016200018e565b600060408284031215620001b757600080fd5b604080519081016001600160401b0381118282101715620001e857634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200020357600080fd5b60208201529392505050565b600181811c908216806200022457607f821691505b602082108114156200024657634e487b7160e01b600052602260045260246000fd5b50919050565b611f0d806200025c6000396000f3fe6080604052600436106100bd5760003560e01c806379aba12311610079578063980b6eac11610056578063980b6eac14610184578063aad3415714610197578063ab53f2c6146101aa578063e533a29d146101cd57005b806379aba12314610149578063832307571461015c578063873779a11461017157005b8063042730d7146100c65780631e93b0f1146100d957806345f70396146100fd578063552d7b8e146101105780636cec5d461461012357806373b4522c1461013657005b366100c457005b005b6100c46100d4366004611866565b6101e0565b3480156100e557600080fd5b506003545b6040519081526020015b60405180910390f35b6100c461010b366004611866565b6104ec565b6100c461011e366004611866565b6106af565b6100c4610131366004611866565b610854565b6100c4610144366004611866565b610a56565b6100c4610157366004611866565b610beb565b34801561016857600080fd5b506001546100ea565b6100c461017f366004611866565b610e56565b6100c4610192366004611866565b610fb7565b6100c46101a5366004611889565b6110f9565b3480156101b657600080fd5b506101bf6112f1565b6040516100f492919061189b565b6100c46101db366004611866565b61138e565b6101f0600c60005414602f6115a0565b61020a8135158061020357506001548235145b60306115a0565b60008080556002805461021c906118f8565b80601f0160208091040260200160405190810160405280929190818152602001828054610248906118f8565b80156102955780601f1061026a57610100808354040283529160200191610295565b820191906000526020600020905b81548152906001019060200180831161027857829003601f168201915b50505050508060200190518101906102ad9190611957565b90507f1dc5544514ba94425d58f6bb92e7d14ae74289c6e17bbbc41c92cb16fa8304dd33836040516102e0929190611a0d565b60405180910390a16102f43415602d6115a0565b805161030c906001600160a01b03163314602e6115a0565b6040810151602083013510610475578060e00151156103f757805160c08201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610362573d6000803e3d6000fd5b5061036b6116fd565b815181516001600160a01b0391821690526020808401518351921691015260408083015182519091015260608083015182519091015260808201516103b290600190611a4a565b602080830180519290925281516000910152514360409091015260c082015160a08301516103e09190611a62565b6020820151606001526103f2816115c5565b505050565b6103ff6116fd565b815181516001600160a01b03918216905260208084015183519216910152604080830151825190910152606080830151825190910152608082015161044690600190611a4a565b60208083018051929092528151600091015280514360409091015260a08301519051606001526103f2816115c5565b61047d6116fd565b815181516001600160a01b03918216905260208084015183519216918101919091526040808401518351820152606080850151845182015260808501518385018051919091528051600194019390935282514392019190915260a0840151915101526103f2816115c5565b5050565b6104fc600260005414600d6115a0565b6105168135158061050f57506001548235145b600e6115a0565b600080805560028054610528906118f8565b80601f0160208091040260200160405190810160405280929190818152602001828054610554906118f8565b80156105a15780601f10610576576101008083540402835291602001916105a1565b820191906000526020600020905b81548152906001019060200180831161058457829003601f168201915b50505050508060200190518101906105b99190611aef565b90507f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b833836040516105ec929190611a0d565b60405180910390a16106003415600b6115a0565b8051610618906001600160a01b03163314600c6115a0565b610620611745565b81516001600160a01b0390811680835260208085015183168185019081526040808701518187019081528884013560608089019182526003600055436001558351958601969096529251909516908301529251918101919091529051608082015260a0015b604051602081830303815290604052600290805190602001906106a992919061177f565b50505050565b6106bf60056000541460156115a0565b6106d9813515806106d257506001548235145b60166115a0565b6000808055600280546106eb906118f8565b80601f0160208091040260200160405190810160405280929190818152602001828054610717906118f8565b80156107645780601f1061073957610100808354040283529160200191610764565b820191906000526020600020905b81548152906001019060200180831161074757829003601f168201915b505050505080602001905181019061077c9190611aef565b90507f643bb8428ae07277421f7600c8b7dc078704f1cfd6d7aaedbe23c2d5754675d333836040516107af929190611a0d565b60405180910390a16107c3341560136115a0565b80516107db906001600160a01b0316331460146115a0565b80602001516001600160a01b03166108fc82604001519081150290604051600060405180830381858888f1935050505015801561081c573d6000803e3d6000fd5b5060408051602080820183526000808352848201516001600160a01b0316808452600690915543600155835191820152909101610685565b610864600860005414601d6115a0565b61087e8135158061087757506001548235145b601e6115a0565b600080805560028054610890906118f8565b80601f01602080910402602001604051908101604052809291908181526020018280546108bc906118f8565b80156109095780601f106108de57610100808354040283529160200191610909565b820191906000526020600020905b8154815290600101906020018083116108ec57829003601f168201915b50505050508060200190518101906109219190611b9f565b90506109396040518060200160405280600081525090565b7fcf1141db81cf673bada35f0f89f1438399a69251ff5f66f15c1433b39ac0ad74338460405161096a929190611a0d565b60405180910390a161097e3415601b6115a0565b8151610996906001600160a01b03163314601c6115a0565b6109a1600243611a4a565b81526040805160e081018252600080825260208083018281528385018381526060808601858152608080880187815260a0808a0189815260c08b018a81528e516001600160a01b039081168d528f8b0151169098528d8c0151909652938c01519092528a0151905288015190528551905260099091554360015591519091610a2b91839101611bbb565b60405160208183030381529060405260029080519060200190610a4f92919061177f565b5050505050565b610a6660036000541460116115a0565b610a8081351580610a7957506001548235145b60126115a0565b600080805560028054610a92906118f8565b80601f0160208091040260200160405190810160405280929190818152602001828054610abe906118f8565b8015610b0b5780601f10610ae057610100808354040283529160200191610b0b565b820191906000526020600020905b815481529060010190602001808311610aee57829003601f168201915b5050505050806020019051810190610b239190611c14565b90507f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c63383604051610b56929190611c94565b60405180910390a1610b6a3415600f6115a0565b8051610b82906001600160a01b0316331460106115a0565b610b8a6116fd565b815181516001600160a01b03918216905260208084015183519216918101919091526040808401518351820152606080850151845182015282840180516000908190528151909401849052805143930192909252905101526103f2816115c5565b610bfb600b60005414602b6115a0565b610c1581351580610c0e57506001548235145b602c6115a0565b600080805560028054610c27906118f8565b80601f0160208091040260200160405190810160405280929190818152602001828054610c53906118f8565b8015610ca05780601f10610c7557610100808354040283529160200191610ca0565b820191906000526020600020905b815481529060010190602001808311610c8357829003601f168201915b5050505050806020019051810190610cb89190611d6a565b90507f23ab25ff90ab175f27c06d9c6f572bd8c6711034b3bf4029a9427fb5a21a29cc3383604051610ceb929190611c94565b60405180910390a1610cff341560296115a0565b6020810151610d1a906001600160a01b03163314602a6115a0565b610d7660405180610100016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581525090565b81516001600160a01b0390811682526020808401519091168183015260408084015181840152606080850151908401526080808501519084015260a0808501519084015260c08085015190840152610dd391908501908501611d86565b151560e0820152600c6000554360015560405161068590829060200160006101008201905060018060a01b038084511683528060208501511660208401525060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e0830151151560e083015292915050565b610e6660016000541460096115a0565b610e8081351580610e7957506001548235145b600a6115a0565b600080805560028054610e92906118f8565b80601f0160208091040260200160405190810160405280929190818152602001828054610ebe906118f8565b8015610f0b5780601f10610ee057610100808354040283529160200191610f0b565b820191906000526020600020905b815481529060010190602001808311610eee57829003601f168201915b5050505050806020019051810190610f239190611dfd565b90507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f72253383604051610f56929190611a0d565b60405180910390a1610f6a341560086115a0565b604080516060810182526000808252602080830182815283850183815286516001600160a01b03168552339091528682013590526002909155436001559151909161068591839101611e19565b610fc760066000541460196115a0565b610fe181351580610fda57506001548235145b601a6115a0565b600080805560028054610ff3906118f8565b80601f016020809104026020016040519081016040528092919081815260200182805461101f906118f8565b801561106c5780601f106110415761010080835404028352916020019161106c565b820191906000526020600020905b81548152906001019060200180831161104f57829003601f168201915b50505050508060200190518101906110849190611dfd565b90507fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c33836040516110b7929190611a0d565b60405180910390a16110cb341560176115a0565b80516110e3906001600160a01b0316331460186115a0565b600080805560018190556104e890600290611803565b611109600a6000541460276115a0565b6111238135158061111c57506001548235145b60286115a0565b600080805560028054611135906118f8565b80601f0160208091040260200160405190810160405280929190818152602001828054611161906118f8565b80156111ae5780601f10611183576101008083540402835291602001916111ae565b820191906000526020600020905b81548152906001019060200180831161119157829003601f168201915b50505050508060200190518101906111c69190611b9f565b90507f30c96b678dbc8064e332b1e773953fe2984e1d4bbe98befef52e2a8c1d85188833836040516111f9929190611e48565b60405180910390a161120d341560246115a0565b8051611225906001600160a01b0316331460256115a0565b60a081015161123c906040840135111560266115a0565b61128e6040518060e0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b81516001600160a01b0390811682526020808401519091168183015260408084015181840152606080850151908401526080808501519084015260a080850151908401528481013560c0840152600b600055436001555161068591839101611bbb565b600060606000546002808054611306906118f8565b80601f0160208091040260200160405190810160405280929190818152602001828054611332906118f8565b801561137f5780601f106113545761010080835404028352916020019161137f565b820191906000526020600020905b81548152906001019060200180831161136257829003601f168201915b50505050509050915091509091565b61139e60096000541460216115a0565b6113b8813515806113b157506001548235145b60226115a0565b6000808055600280546113ca906118f8565b80601f01602080910402602001604051908101604052809291908181526020018280546113f6906118f8565b80156114435780601f1061141857610100808354040283529160200191611443565b820191906000526020600020905b81548152906001019060200180831161142657829003601f168201915b505050505080602001905181019061145b9190611d6a565b90506114736040518060200160405280600081525090565b6114858260c0015143101560236115a0565b7f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb6077633846040516114b6929190611c94565b60405180910390a181606001518260a001516114d29190611a4a565b815260608201516114e6903414601f6115a0565b81516114fe906001600160a01b0316331460206115a0565b6115496040518060c0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b82516001600160a01b03908116825260208085015190911681830152604080850151818401526060808601519084015260808086015190840152835160a0840152600a6000554360015551610a2b91839101611e8a565b816104e85760405163100960cb60e01b81526004810182905260240160405180910390fd5b60208082015101516116a05761161c6040518060c0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b039081168252825160209081015190911681830152825160409081015181840152835160609081015181850152828501805151608086015251015160a08401526008600055436001555161167c91839101611e8a565b604051602081830303815290604052600290805190602001906103f292919061177f565b6040805160608082018352600080835260208084018281528486018381528751516001600160a01b039081168752885184015116909152868201519093015190925260059055436001559151909161167c91839101611e19565b50565b6040518060400160405280611710611745565b81526020016117406040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b604051806080016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081525090565b82805461178b906118f8565b90600052602060002090601f0160209004810192826117ad57600085556117f3565b82601f106117c657805160ff19168380011785556117f3565b828001600101855582156117f3579182015b828111156117f35782518255916020019190600101906117d8565b506117ff929150611839565b5090565b50805461180f906118f8565b6000825580601f1061181f575050565b601f0160209004906000526020600020908101906116fa91905b5b808211156117ff576000815560010161183a565b60006040828403121561186057600080fd5b50919050565b60006040828403121561187857600080fd5b611882838361184e565b9392505050565b60006060828403121561186057600080fd5b82815260006020604081840152835180604085015260005b818110156118cf578581018301518582016060015282016118b3565b818111156118e1576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061190c57607f821691505b6020821081141561186057634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461194457600080fd5b919050565b80151581146116fa57600080fd5b600061010080838503121561196b57600080fd5b6040519081019067ffffffffffffffff8211818310171561199c57634e487b7160e01b600052604160045260246000fd5b816040526119a98461192d565b81526119b76020850161192d565b602082015260408401516040820152606084015160608201526080840151608082015260a084015160a082015260c084015160c082015260e084015191506119fe82611949565b60e08101919091529392505050565b6001600160a01b038316815260608101611882602083018480358252602090810135910152565b634e487b7160e01b600052601160045260246000fd5b60008219821115611a5d57611a5d611a34565b500190565b600082821015611a7457611a74611a34565b500390565b600060608284031215611a8b57600080fd5b6040516060810181811067ffffffffffffffff82111715611abc57634e487b7160e01b600052604160045260246000fd5b604052905080611acb8361192d565b8152611ad96020840161192d565b6020820152604083015160408201525092915050565b600060608284031215611b0157600080fd5b6118828383611a79565b600060c08284031215611b1d57600080fd5b60405160c0810181811067ffffffffffffffff82111715611b4e57634e487b7160e01b600052604160045260246000fd5b604052905080611b5d8361192d565b8152611b6b6020840161192d565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a08201525092915050565b600060c08284031215611bb157600080fd5b6118828383611b0b565b81516001600160a01b0390811682526020808401519091169082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e081015b92915050565b600060808284031215611c2657600080fd5b6040516080810181811067ffffffffffffffff82111715611c5757634e487b7160e01b600052604160045260246000fd5b604052611c638361192d565b8152611c716020840161192d565b602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b038316815281356020808301919091526060820190830135611cbc81611949565b8015156040840152509392505050565b600060e08284031215611cde57600080fd5b60405160e0810181811067ffffffffffffffff82111715611d0f57634e487b7160e01b600052604160045260246000fd5b604052905080611d1e8361192d565b8152611d2c6020840161192d565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201525092915050565b600060e08284031215611d7c57600080fd5b6118828383611ccc565b600060208284031215611d9857600080fd5b813561188281611949565b600060208284031215611db557600080fd5b6040516020810181811067ffffffffffffffff82111715611de657634e487b7160e01b600052604160045260246000fd5b604052905080611df58361192d565b905292915050565b600060208284031215611e0f57600080fd5b6118828383611da3565b81516001600160a01b039081168252602080840151909116908201526040808301519082015260608101611c0e565b6001600160a01b038316815281356020808301919091526080820190830135611e7081611949565b801515604084015250604083013560608301529392505050565b81516001600160a01b0390811682526020808401519091169082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c08101611c0e56fea26469706673582212206e0c2000eb96f4e36154e144b9d8af60e808cdde28c8f323ef166605816ac31764736f6c634300080c0033`,
  BytecodeLen: 8553,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:31:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:40:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:48:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:144:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:150:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:165:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:75:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:89:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:97:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:105:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:114:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "InsuranceCompany": InsuranceCompany,
  "Subscriber": Subscriber
  };
export const _APIs = {
  };
