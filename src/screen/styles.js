import { fontScale, heightPercentageToDP, normalize, widthPercentageToDP } from '../utility/device';
import { StyleSheet, Platform } from 'react-native';
// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: "transparent",
        flex: 1
    },
    buttonContainerPortrait: {
        position: 'absolute',
        bottom: 0,
        left: 10,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        //backgroundColor: 'rgba(0, 0, 0, 0.9)'
    },
    buttonContainerLandscape: {
        borderTopColor: "rgba(0, 0, 0, 0.1)",
        borderTopWidth: 1,
        paddingHorizontal: normalize(10),
        bottom: 0,
        width: '100%',
        position: "absolute",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        backgroundColor: '#fff'
    },
    buttonPortrait: {
        backgroundColor: 'transparent',
        padding: 5,
        marginHorizontal: 20,
        flexDirection: "row"
    },
    buttonLandscape: {
        backgroundColor: 'transparent',
        padding: 5,
        marginVertical: 20,
        flexDirection: "row"
    },
    textContainerLandscape: {
        paddingHorizontal: normalize(10),
        paddingVertical: normalize(20),
        bottom: 126,
        width: '100%',
        position: "absolute",
        backgroundColor: '#fff',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    dlImage: {
        width: widthPercentageToDP('15%'),
        height: heightPercentageToDP('5%'),
    },
    stepStyle: {
        color: "#6AB944",
        fontWeight: "600"
    },
    dlFront: {
        fontSize: fontScale(20),
        fontWeight: "800"
    },
    arrowContainerStyle: {
        marginLeft: normalize(10),
        marginTop: normalize(10),
        backgroundColor: "#fff",
        top: 0,
        position: "absolute",
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        justifyContent: "center",
        alignItems: "center",
    },
    backArrow: {
        fontSize: fontScale(25)
    },
    libraryIcon: {
        fontSize: 25,
        color: 'black'
    },
    galleryText:{
        alignSelf: "center"
    },
    captureIcon:{ 
        fontSize: 70, 
        color: "#6AB944" 
    },
    flashIcon:{ 
        fontSize: 25, 
        color: "black" 
    },
    outputScreencontainer:{
        padding:normalize(10),
        flex:1,
        backgroundColor:"#fff"
    },
    step2Of3Style:{
        color: "#6AB944",
        fontWeight: "600",
        fontSize:fontScale(14),
    },
    summaryText:{
        marginTop: normalize(10),
        opacity:0.7,
        fontSize:fontScale(14),
    },
    imageStyle:{
        marginTop:normalize(20),
        alignSelf:"center",
        width:'100%',
        height:heightPercentageToDP('30%'),
    },
    retakeContainer:{
        width:widthPercentageToDP('45%'),
        backgroundColor:"#f3f3f3",
        marginRight: normalize(5),
        justifyContent:"center",
        alignItems:"center",
        
    },
    nextContainer:{
        width:widthPercentageToDP('45%'),
        backgroundColor:"#6AB944",
        justifyContent:"center",
        alignItems:"center",
    },
    buttonContainer:{
        flex:1,
        flexDirection:"row",
        alignItems:"flex-end",
        marginBottom:normalize(10),
    },
    nextText:{
        fontSize:fontScale(16),
        paddingVertical:normalize(10),
        color:"#fff",
    },
    retakeText:{
        fontSize:fontScale(16),
        paddingVertical:normalize(10),
        color:"#6AB944",
    }
});
export default styles;