// setTimeout(function () {

//     // count the changed number compared to the last visit
//     let lastPv = parseInt(localStorage.getItem('pv'));
//     let lastUv = parseInt(localStorage.getItem('uv'));
//     if (isNaN(lastPv) || isNaN(lastUv) || lastPv <= 0 || lastUv <= 0) {
//         lastPv = 0;
//         lastUv = 0;
//     }

//     let pv = parseInt($("#busuanzi_value_site_pv").text());
//     let uv = parseInt($("#busuanzi_value_site_uv").text());
//     if (isNaN(pv) || isNaN(uv) || pv <= 0 || uv <= 0) {
//         return;
//     }
//     localStorage.setItem('pv', pv);
//     localStorage.setItem('uv', uv);

//     let pvChange = pv - lastPv;
//     let uvChange = uv - lastUv;
//     if (pvChange) {
//         $("#busuanzi_value_site_pv_change").text("↑" + pvChange);
//     }
//     if (uvChange) {
//         $("#busuanzi_value_site_uv_change").text("↑" + uvChange);
//     }
// }, 4000);