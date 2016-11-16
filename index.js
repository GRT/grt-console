/**
 * Created by Oakley Hall on 11/11/16.
 */
/* eslint-disable */

var style = 'background: white; color: green';

var grtBig = function grtBig(msg){
  var banner = '\n%c' + msg + '\n' +
    '       ╔═╗╦═╗╔╦╗       \n' +
    '       ║ ╦╠╦╝ ║        \n' +
    '       ╚═╝╩╚═ ╩        \n' +
    'www.grassroots-tech.com\n\n';

  console.log( banner, style );
};

var grtGiant = function grtGiant(msg){
  var banner = '%c' + msg + '\n\n' +
    '        GGGGGGGGGGGGGRRRRRRRRRRRRRRRRR   TTTTTTTTTTTTTTTTTTTTTTT        \n' +
    '     GGG::::::::::::GR::::::::::::::::R  T:::::::::::::::::::::T        \n' +
    '   GG:::::::::::::::GR::::::RRRRRR:::::R T:::::::::::::::::::::T        \n' +
    '  G:::::GGGGGGGG::::GRR:::::R     R:::::RT:::::TT:::::::TT:::::T        \n' +
    ' G:::::G       GGGGGG  R::::R     R:::::RTTTTTT  T:::::T  TTTTTT        \n' +
    'G:::::G                R::::R     R:::::R        T:::::T                \n' +
    'G:::::G                R::::RRRRRR:::::R         T:::::T                \n' +
    'G:::::G    GGGGGGGGGG  R:::::::::::::RR          T:::::T                \n' +
    'G:::::G    G::::::::G  R::::RRRRRR:::::R         T:::::T                \n' +
    'G:::::G    GGGGG::::G  R::::R     R:::::R        T:::::T                \n' +
    'G:::::G        G::::G  R::::R     R:::::R        T:::::T                \n' +
    ' G:::::G       G::::G  R::::R     R:::::R        T:::::T                \n' +
    '  G:::::GGGGGGGG::::GRR:::::R     R:::::R      TT:::::::TT              \n' +
    '   GG:::::::::::::::GR::::::R     R:::::R      T:::::::::T              \n' +
    '     GGG::::::GGG:::GR::::::R     R:::::R      T:::::::::T              \n' +
    '        GGGGGG   GGGGRRRRRRRR     RRRRRRR      TTTTTTTTTTT              \n' +
    '                                                                        \n' +
    '                    www.grassroots-tech.com                             \n';

  console.log(banner, style);
};

module.exports.grtBig = grtBig;
module.exports.grtGiant = grtGiant;