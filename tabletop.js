function init() {
 Tabletop.init( { key: ‘https://drive.google.com/open?id=1UJcmT-BlIINS_I3nK1mJLmrnjdBLY1I_dpbxxyD1ZAg',
 callback: function(data, tabletop) { 
 console.log(data)
 },
 simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)
