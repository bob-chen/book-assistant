/**
 * Created by yucongchen on 2016/10/22.
 */
import React, {
    PixelRatio,
    Dimensions,
    ActivityIndicatorIOS
} from 'react-native';

module.exports = {
    pixel: 1/PixelRatio.get(),

    size: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    },

    get: function(url, successCallBack, failCallBack) {
        fetch(url)
            .then( (response) => response.text() )
            .then( (responseText) => {
                successCallBack( JSON.parse(responseText));
            } )
            .catch(function(err){
                failCallBack(err);
            });
    }

};