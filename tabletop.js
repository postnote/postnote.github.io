function init() {
 Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/1UJcmT-BlIINS_I3nK1mJLmrnjdBLY1I_dpbxxyD1ZAg/edit?usp=sharing',
 callback: function(data, tabletop) { 
 console.log(data)
 },
 simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)
