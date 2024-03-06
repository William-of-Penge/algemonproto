// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile0 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile15 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile17 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile18 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile19 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile20 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile21 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "empty":
            case "bumbo1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "islands":
            case "level1":return tiles.createTilemap(hex`10001000020202020202020202020202020202020200000000000000000000000000000202000700000305000000000000070002020000000000000a00000a00000000020200000000000000000000000000000202000000000000000f0000000000000203050003080805000000000f00000002040600040909060000000001000000020200000000000000000b00000007000202000000000000000010000d0000000202000007000000000d00000000000002020000000000000000000000000a000202000000000000000000030500000002020000000a00000d00000406000000020200000000000b0000030500000d00020202020202020c0e0204060202020202`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.builtin.brick,sprites.skillmap.islandTile0,sprites.skillmap.islandTile6,sprites.skillmap.islandTile2,sprites.skillmap.islandTile8,sprites.castle.rock1,sprites.skillmap.islandTile1,sprites.skillmap.islandTile7,sprites.castle.rock2,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,sprites.castle.rock0,myTiles.tile10], TileScale.Sixteen);
            case "level":
            case "level":return tiles.createTilemap(hex`200020000e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0f0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0f0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0f0e0e0e0e0e0e0e0e0e0e0e0e0e0e0f0e0e0e0e0e0e0e0e0e0e0e0f0e0e0e0e0e0f0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0f0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0f0e0e0e0f0e0e0e0e0e0e0f0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0f0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0f0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0b0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0c0e0e0e0f0910111d1b1a0101050101010101010501010101010101010101010a0e0f0e0e0915121c1d1a1804190418010101010101010102010105010501010a0e0e0e0e0915121a1c1a0404181904030303030103010501050301010301010a0e0e0f0e0915121d1f1e1804040419010101020101010101010103010101010a0e0e0e0e0915120128030101010201010301010101050105010501010102010a0e0e0e0e0915120305010105050105050101010103010102010501010101010a0e0e0e0e0915120101030320010101030101020103010101010301020103010a0f0e0e0e0915120102010501010201010101010101010101010101010101010a0e0e0e0e0915121016161616161616161616161616161616161616161616110a0e0e0e0e0915121417171717171717171717171717171717171717171717130a0e0e0e0e0915121804191810110303030303030303030303030303030310110a0f0e0e0e0915120418041915120101010101030101010101010301010115120a0e0e0e0e0915120101010215122523252301030102010105010201010315120a0e0f0e0f0915120505050515122324232405221b1a010301050101050115120a0e0e0e0e091512010505011512241d2323011a1a22010103010505050115120a0e0e0f0e09151201010501151226212724011d211c010101010101010115120a0e0e0e0e0915121016161115121016161616161616161616161616161115120a0e0f0e0e0914131417171314131417171717171717171717171717171315120a0e0e0e0e0901050301050503050101010101050505050303050505030314130a0e0f0e0e070606060606060606060606060606060606060606060606060606080e0e0e0e0e0e0e0e0f0e0e0e0e0e0e0f0e0e0e0f0e0e0e0e0e0e0e0e0e0e0e0e0e0f0e0e0e0e0f0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0f0e0e0e0e0f0e0e`, img`

................................
................................
................................
................................
................................
................................
................................
................................
.222222222222222222222222222222.
.2............................2.
.2...222......................2.
.2...222......................2.
.2...222.2....................2.
.2...2..222...................2.
.2............................2.
.2............................2.
.2............................2.
.2............................2.
.2............................22
.2............................22
.2............................22
.2............................22
.2.........2222...............22
.2.........2222.222...........22
.2.........2222.222...........22
.2.........2.22.2.2...........22
.2............................22
.2............................22
.2............................22
.2............................22
.2222222222222222222222222222222
......................2222222222
`, [myTiles.tile0,sprites.castle.tileGrass1,sprites.castle.saplingPine,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass1,sprites.castle.tileGrass3,sprites.skillmap.islandTile7,sprites.skillmap.islandTile6,sprites.skillmap.islandTile8,sprites.skillmap.islandTile3,sprites.skillmap.islandTile5,sprites.skillmap.islandTile0,sprites.skillmap.islandTile2,sprites.skillmap.islandTile1,myTiles.tile11,myTiles.tile12,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.castle.tilePath4,sprites.castle.tilePath2,sprites.castle.tilePath8,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass3,sprites.dungeon.floorLight0,sprites.dungeon.floorLight1,sprites.dungeon.floorLightMoss,sprites.dungeon.floorMixed,sprites.dungeon.floorLight5,myTiles.tile13,myTiles.tile14,sprites.dungeon.doorClosedNorth,sprites.dungeon.floorLight4,sprites.dungeon.floorDark0,sprites.dungeon.floorDark1,sprites.dungeon.floorDark4,sprites.dungeon.floorDark5,sprites.dungeon.floorDarkDiamond,myTiles.tile21], TileScale.Sixteen);
            case "house":
            case "level2":return tiles.createTilemap(hex`1000100001010101010101010101010101010000010101030500020c0101010101010000010101061300100b0101010101010000010101061410040d0101010101010000010101071512100d010101010101000001010107160e0f0b0101010101010000010101070410120d0101010101010000010101071011100b0101010101010000010101070e18040b0101010101010000010101080917090a0101010101010000010101010101010101010101010100000101010101010101010101010101000001010101010101010101010101010000010101010101010101010101010100000101010101010101010101010101000001010101010101010101010101010000`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
2 2 2 2 . . . 2 2 2 2 2 2 2 . . 
2 2 2 2 . . . 2 2 2 2 2 2 2 . . 
2 2 2 2 . . . 2 2 2 2 2 2 2 . . 
2 2 2 2 . . . 2 2 2 2 2 2 2 . . 
2 2 2 2 . . . 2 2 2 2 2 2 2 . . 
2 2 2 2 . . . 2 2 2 2 2 2 2 . . 
2 2 2 2 . . . 2 2 2 2 2 2 2 . . 
2 2 2 2 2 . 2 2 2 2 2 2 2 2 . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
`, [myTiles.transparency16,myTiles.tile15,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.floorMixed,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast1,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight4,sprites.dungeon.floorLight2,sprites.dungeon.floorLight1,sprites.dungeon.floorLight0,myTiles.tile5,myTiles.tile17,myTiles.tile18,myTiles.tile19,myTiles.tile13,myTiles.tile21], TileScale.Sixteen);

        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile0":return tile0;
            case "tile1":return tile1;
            case "tile2":return tile2;
            case "tile3":return tile3;
            case "tile4":return tile4;
            case "tile6":return tile6;
            case "tile7":return tile7;
            case "tile8":return tile8;
            case "tile9":return tile9;
            case "tile10":return tile10;
            case "myTile0":
            case "tile11":return tile11;
            case "myTile1":
            case "tile12":return tile12;
            case "bush":
            case "tile14":return tile14;
            case "myTile2":
            case "tile15":return tile15;
            case "myTile3":
            case "tile16":return tile16;
            case "myTile4":
            case "tile17":return tile17;
            case "myTile":
            case "tile5":return tile5;
            case "myTile5":
            case "tile18":return tile18;
            case "myTile6":
            case "tile19":return tile19;
            case "newSpawn":
            case "tile20":return tile20;
            case "houseDoor":
            case "tile13":return tile13;
            case "houseDoormat":
            case "tile21":return tile21;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
