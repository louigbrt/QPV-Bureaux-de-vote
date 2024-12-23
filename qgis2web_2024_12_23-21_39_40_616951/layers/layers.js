var wms_layers = [];

var lyr_IGNScansmonde_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mapsref.brgm.fr/wxs/refcom-brgm/refign?",
                              attributions: ' ',
                              params: {
                                "LAYERS": "MONDE",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'IGN Scans monde',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_IGNScansmonde_0, 0]);

    var projection_Limitesadministrativesmisesjourencontinu_1 = ol.proj.get('EPSG:3857');
    var projectionExtent_Limitesadministrativesmisesjourencontinu_1 = projection_Limitesadministrativesmisesjourencontinu_1.getExtent();
    var size_Limitesadministrativesmisesjourencontinu_1 = ol.extent.getWidth(projectionExtent_Limitesadministrativesmisesjourencontinu_1) / 256;
    var resolutions_Limitesadministrativesmisesjourencontinu_1 = new Array(14);
    var matrixIds_Limitesadministrativesmisesjourencontinu_1 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Limitesadministrativesmisesjourencontinu_1[z] = size_Limitesadministrativesmisesjourencontinu_1 / Math.pow(2, z);
        matrixIds_Limitesadministrativesmisesjourencontinu_1[z] = z;
    }
    var lyr_Limitesadministrativesmisesjourencontinu_1 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://data.geopf.fr/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetCapabilities",
                                attributions: ' ',
                                "layer": "LIMITES_ADMINISTRATIVES_EXPRESS.LATEST",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_Limitesadministrativesmisesjourencontinu_1,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Limitesadministrativesmisesjourencontinu_1),
                resolutions: resolutions_Limitesadministrativesmisesjourencontinu_1,
                matrixIds: matrixIds_Limitesadministrativesmisesjourencontinu_1
              }),
              style: 'normal',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Limites administratives mises à jour en continu.',
                            opacity: 1.0,
                            
                            
                          });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_qp2024epsg215420240820qp_2024_epsg2154_20240820_3 = new ol.format.GeoJSON();
var features_qp2024epsg215420240820qp_2024_epsg2154_20240820_3 = format_qp2024epsg215420240820qp_2024_epsg2154_20240820_3.readFeatures(json_qp2024epsg215420240820qp_2024_epsg2154_20240820_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_qp2024epsg215420240820qp_2024_epsg2154_20240820_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_qp2024epsg215420240820qp_2024_epsg2154_20240820_3.addFeatures(features_qp2024epsg215420240820qp_2024_epsg2154_20240820_3);
var lyr_qp2024epsg215420240820qp_2024_epsg2154_20240820_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_qp2024epsg215420240820qp_2024_epsg2154_20240820_3, 
                style: style_qp2024epsg215420240820qp_2024_epsg2154_20240820_3,
                popuplayertitle: 'qp-2024-epsg2154-20240820 — qp_2024_epsg2154_20240820',
                interactive: true,
                title: '<img src="styles/legend/qp2024epsg215420240820qp_2024_epsg2154_20240820_3.png" /> qp-2024-epsg2154-20240820 — qp_2024_epsg2154_20240820'
            });
var format_contours_bureaux_vote_4 = new ol.format.GeoJSON();
var features_contours_bureaux_vote_4 = format_contours_bureaux_vote_4.readFeatures(json_contours_bureaux_vote_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_contours_bureaux_vote_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_contours_bureaux_vote_4.addFeatures(features_contours_bureaux_vote_4);
var lyr_contours_bureaux_vote_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_contours_bureaux_vote_4, 
                style: style_contours_bureaux_vote_4,
                popuplayertitle: 'contours_bureaux_vote',
                interactive: true,
                title: '<img src="styles/legend/contours_bureaux_vote_4.png" /> contours_bureaux_vote'
            });

lyr_IGNScansmonde_0.setVisible(true);lyr_Limitesadministrativesmisesjourencontinu_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_qp2024epsg215420240820qp_2024_epsg2154_20240820_3.setVisible(true);lyr_contours_bureaux_vote_4.setVisible(true);
var layersList = [lyr_IGNScansmonde_0,lyr_Limitesadministrativesmisesjourencontinu_1,lyr_OpenStreetMap_2,lyr_qp2024epsg215420240820qp_2024_epsg2154_20240820_3,lyr_contours_bureaux_vote_4];
lyr_qp2024epsg215420240820qp_2024_epsg2154_20240820_3.set('fieldAliases', {'code_quartier': 'code_quartier', 'nom_quartier': 'nom_quartier', });
lyr_contours_bureaux_vote_4.set('fieldAliases', {'codeDepartement': 'codeDepartement', 'nomDepartement': 'nomDepartement', 'codeCirconscription': 'codeCirconscription', 'nomCirconscription': 'nomCirconscription', 'codeCommune': 'codeCommune', 'nomCommune': 'nomCommune', 'numeroBureauVote': 'numeroBureauVote', 'codeBureauVote': 'codeBureauVote', 'id_bv': 'id_bv', });
lyr_qp2024epsg215420240820qp_2024_epsg2154_20240820_3.set('fieldImages', {'code_quartier': '', 'nom_quartier': '', });
lyr_contours_bureaux_vote_4.set('fieldImages', {'codeDepartement': 'TextEdit', 'nomDepartement': 'TextEdit', 'codeCirconscription': 'TextEdit', 'nomCirconscription': 'TextEdit', 'codeCommune': 'TextEdit', 'nomCommune': 'TextEdit', 'numeroBureauVote': 'TextEdit', 'codeBureauVote': 'TextEdit', 'id_bv': 'TextEdit', });
lyr_qp2024epsg215420240820qp_2024_epsg2154_20240820_3.set('fieldLabels', {'code_quartier': 'no label', 'nom_quartier': 'no label', });
lyr_contours_bureaux_vote_4.set('fieldLabels', {'codeDepartement': 'no label', 'nomDepartement': 'no label', 'codeCirconscription': 'no label', 'nomCirconscription': 'no label', 'codeCommune': 'no label', 'nomCommune': 'no label', 'numeroBureauVote': 'no label', 'codeBureauVote': 'no label', 'id_bv': 'no label', });
lyr_contours_bureaux_vote_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});