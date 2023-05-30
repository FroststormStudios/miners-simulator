$(document).ready(function(){
    var rocks = 0;
    var coal = 0;
    var copper = 0;
    var StonePickaxes = 0;
    var CoalPickaxes = 0;
    var money = 0;
    var rockPlus = 1;
    var coalPlus = 1;
    var copperPlus = 1;
    var autorockPlus = 0;
    var autocoalPlus = 0;
    var autocopperPlus = 0;
    var autoMinerPrice = 100;
    var coalAutoMinerPrice = 150;
    var copperAutoMinerPrice = 200;
    var StonePickaxePrice = 50;
    var CoalPickaxePrice = 500;
    var rockPrice = 1;
    var coalPrice = 2;
    var copperPrice = 5;

    var backgroundMusic = new Audio("Miners Idle.mp3");
    var isMusicPlaying = true;

    $("#toggleMusic").click(function() {
        if (isMusicPlaying) {
            backgroundMusic.pause();
            isMusicPlaying = false;
            $("#toggleMusic").text("Play Music");
        } else {
            backgroundMusic.play();
            isMusicPlaying = true;
            $("#toggleMusic").text("Pause Music");
        }
    });

    setInterval(function(){
        rocks += autorockPlus;
        coal += autocoalPlus;
        copper += autocopperPlus;
        changeInventory();
        changeMarket();
    }, 1000);

    $("#Mine").click(function(){
        rocks += rockPlus;
        changeInventory();
        changeMarket();
    });

    $("#minecoal").click(function(){
        if (StonePickaxes == 0) {
            alert("You need a Stone Pickaxe to mine coal!");
        } else {
            coal += coalPlus;
            changeInventory();
        }
    });

    $("#minecopper").click(function(){
        if (CoalPickaxes == 0) {
            alert("You need a Coal Pickaxe to mine copper!");
        } else {
            copper += copperPlus;
            changeInventory();
        }
    });

    $("#sell1").click(function(){
        if (rocks >= 1) {
            rocks--;
            money += rockPrice;
            changeInventory();
            changeMarket();
        } else {
            alert("You don't have enough rocks to sell!");
        }
    });
    
    $("#sell10").click(function(){
        if (rocks >= 10) {
            rocks -= 10;
            money += rockPrice * 10;
            changeInventory();
            changeMarket();
        } else {
            alert("You don't have enough rocks to sell!");
        }
    });
    
    $("#sellAll").click(function(){
        if (rocks > 0) {
            money += rockPrice * rocks;
            rocks = 0;
            changeInventory();
            changeMarket();
        } else {
            alert("You don't have any rocks to sell!");
        }
    });
    
    $("#sell1COAL").click(function(){
        if (coal >= 1) {
            coal--;
            money += coalPrice;
            changeInventory();
            changeMarket();
        } else {
            alert("You don't have enough coal to sell!");
        }
    });
    
    $("#sell10COAL").click(function(){
        if (coal >= 10) {
            coal -= 10;
            money += coalPrice * 10;
            changeInventory();
            changeMarket();
        } else {
            alert("You don't have enough coal to sell!");
        }
    });
    
    $("#sellAllCOAL").click(function(){
        if (coal > 0) {
            money += coalPrice * coal;
            coal = 0;
            changeInventory();
            changeMarket();
        } else {
            alert("You don't have any coal to sell!");
        }
    });
    
    $("#sell1COPPER").click(function(){
        if (copper >= 1) {
            copper--;
            money += copperPrice;
            changeInventory();
            changeMarket();
        } else {
            alert("You don't have enough copper to sell!");
        }
    });
    
    $("#sell10COPPER").click(function(){
        if (copper >= 10) {
            copper -= 10;
            money += copperPrice * 10;
            changeInventory();
            changeMarket();
        } else {
            alert("You don't have enough copper to sell!");
        }
    });
    
    $("#sellAllCOPPER").click(function(){
        if (copper > 0) {
            money += copperPrice * copper;
            copper = 0;
            changeInventory();
            changeMarket();
        } else {
            alert("You don't have any copper to sell!");
        }
    });
    

    $("#autoMiner").click(function(){
        if (money >= autoMinerPrice) {
            money -= autoMinerPrice;
            autorockPlus++;
            changeInventory();
            changeMarket();
        } else {
            alert("Not enough money to buy the Auto Miner!");
        }
    });

    $("#autoCoalMiner").click(function(){
        if (money >= coalAutoMinerPrice) {
            money -= coalAutoMinerPrice;
            autocoalPlus++;
            changeInventory();
            changeMarket();
        } else {
            alert("Not enough money to buy the Coal Auto Miner!");
        }
    });

    $("#autoCopperMiner").click(function(){
        if (money >= copperAutoMinerPrice) {
            money -= copperAutoMinerPrice;
            autocopperPlus++;
            changeInventory();
            changeMarket();
        } else {
            alert("Not enough money to buy the Copper Auto Miner!");
        }
    });

    $("#buyStonePickaxe").click(function(){
        if (money >= StonePickaxePrice) {
            money -= StonePickaxePrice;
            StonePickaxes++;
            changeInventory();
            changeMarket();
        } else {
            alert("Not enough money to buy the Stone Pickaxe!");
        }
    });

    $("#buyCoalPickaxe").click(function(){
        if (money >= CoalPickaxePrice) {
            money -= CoalPickaxePrice;
            CoalPickaxes++;
            changeInventory();
            changeMarket();
        } else {
            alert("Not enough money to buy the Coal Pickaxe!");
        }
    });

    $("#visit").click(function(){
        $(".main").hide();
        $(".marketplace").show();
        menu = "marketplace";
    });

    $("#return").click(function(){
        $(".marketplace").hide();
        $(".main").show();
        menu = "main";
    });

    function changeInventory(){
        $("#money").text("Money: $" + money);
        $("#rocks").text("You now own " + rocks + " rocks.");
        $("#coal").text("You now own " + coal + " coal.");
        $("#copper").text("You now own " + copper + " copper.");
        $("#StonePickaxes").text("You now own " + StonePickaxes + " Stone Pickaxe(s).");
        $("#CoalPickaxes").text("You now own " + CoalPickaxes + " Coal Pickaxe(s).");
    }

    function changeMarket(){
        $("#sell1").text("Sell [1] rock ($" + rockPrice + ")");
        $("#sell10").text("Sell [10] rocks ($" + rockPrice * 10 + ")");
        $("#sell1COAL").text("Sell [1] coal ($" + coalPrice + ")");
        $("#sell10COAL").text("Sell [10] coal ($" + coalPrice * 10 + ")");
        $("#sell1COPPER").text("Sell [1] copper ($" + copperPrice + ")");
        $("#sell10COPPER").text("Sell [10] copper ($" + copperPrice * 10 + ")");
        $("#autoMiner").text("Buy [1] Auto Miner ($" + autoMinerPrice + ")");
        $("#autoCoalMiner").text("Buy [1] Coal Auto Miner ($" + coalAutoMinerPrice + ")");
        $("#autoCopperMiner").text("Buy [1] Copper Auto Miner ($" + copperAutoMinerPrice + ")");
        $("#buyStonePickaxe").text("Buy [1] Stone Pickaxe ($" + StonePickaxePrice + ")");
        $("#buyCoalPickaxe").text("Buy [1] Coal Pickaxe ($" + CoalPickaxePrice + ")");

        if (money < autoMinerPrice) {
            $("#autoMiner").attr("disabled", "disabled");
        } else {
            $("#autoMiner").removeAttr("disabled");
        }

        if (money < coalAutoMinerPrice) {
            $("#autoCoalMiner").attr("disabled", "disabled");
        } else {
            $("#autoCoalMiner").removeAttr("disabled");
        }

        if (money < copperAutoMinerPrice) {
            $("#autoCopperMiner").attr("disabled", "disabled");
        } else {
            $("#autoCopperMiner").removeAttr("disabled");
        }

        if (money < StonePickaxePrice) {
            $("#buyStonePickaxe").attr("disabled", "disabled");
        } else {
            $("#buyStonePickaxe").removeAttr("disabled");
        }

        if (money < CoalPickaxePrice) {
            $("#buyCoalPickaxe").attr("disabled", "disabled");
        } else {
            $("#buyCoalPickaxe").removeAttr("disabled");
        }
    }
});
