import { View, Text, StyleSheet, Image ,TouchableOpacity,Platform} from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from "@react-navigation/native"
import { COLORS, FONTS, icons, images, SIZES } from "../../consts"

export const RequirementItem = ({ item }) => {
  return <View style={{
    marginRight: SIZES.padding / 2,

  }}>
    <View style={{
      padding: SIZES.padding / 2,
      borderRadius: SIZES.radiusSmall,
      borderColor: COLORS.gray,
      borderWidth: 1,
      marginBottom: SIZES.padding / 3

    }}>
      <Image style={{
        width: 25,
        height: 25,
        tintColor: COLORS.gray
      }} source={item.icon} />
    </View>
    {/* Bar  */}
    <View style={{
      width: "100%",
      height: 3,
      backgroundColor: COLORS.gray,
      borderRadius: SIZES.radiusBase,
    }}>
      <View
        style={{
          width: item.percent,
          height: "100%",
          position: "absolute",
          backgroundColor: COLORS.green,
          borderRadius: SIZES.radiusBase,
        }}
      >
      </View>
    </View>
  </View>
}

const RequirementItemDetail = ({ item }) => {
  return <View style={{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: SIZES.padding / 2
  }}>
    <View style={{
      flexDirection: "row",
      alignItems: "center"
    }}><Image style={{
      width: 25,
      height: 25,
      resizeMode: 'contain'
    }} source={item.icon} /><Text style={{
      ...FONTS.body4,
      marginLeft: SIZES.padding / 3
    }}>{item.name}</Text></View>
    <Text style={{
      ...FONTS.body4,
      color: COLORS.gray,
      marginLeft: SIZES.padding / 3
    }}>{item.content}</Text>
  </View>
}


export default function PlantDetail() {
  const route = useRoute();
  const { navigate } = useNavigation()
  const { id, name } = route.params;
  const [requireItems, setRequireItem] = useState([
    {
      id: "1",
      icon: icons.sun,
      percent: "50%",
      name: "Sunlight",
      content: '15oC'
    },
    {
      id: "2",
      icon: icons.drop,
      percent: "70%",
      name: "Water",
      content: '250 ML Daily'


    }, {
      id: "3",
      icon: icons.temperature,
      percent: "25%",
      name: "Rom Temp",
      content: '25oC'


    }, {
      id: "4",
      icon: icons.garden,
      percent: "10%",
      name: "Soil",
      content: '3 Kg'


    },
    {
      id: "5",
      icon: icons.seed,
      percent: "50%",
      name: "Fertilizer",
      content: '150 Mg'
    },
  ])
  const renderHeader = () => {
    return <View style={styles.header}>

      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center'
      }}>
        <TouchableOpacity onPress={() => {
          navigate('Home');
        }} style={{
          padding: SIZES.padding / 2,
          borderRadius: SIZES.radiusLarge,
          backgroundColor: COLORS.whiteOpacity,
        }}>
          <Image
            style={{
              width: 18,
              height: 18,
              resizeMode: 'contain',
            }}
            source={icons.back}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
            }}
            source={icons.focus}
          />
        </TouchableOpacity>
      </View>
      <Text style={{
        ...FONTS.h2,
        color: COLORS.white,
        marginTop: SIZES.padding
      }}>{name}</Text>
    </View>
  }
  return (
    <View style={styles.container}>
      {/* Render Header */}
      {renderHeader()}
      {/* Banner Photo */}
      <View style={styles.bannerPhoto}>
        <Image style={{
          width: "100%",
          height: "100%",
        }} resizeMode='cover' source={images?.bannerBG} />
      </View>
      {/* Requirements */}
      <View
        style={styles.requirements}
      >
        <View style={{
          padding: SIZES.padding

        }}>
          <View><Text style={{ ...FONTS.h2, marginBottom: SIZES.padding }}>Requirements</Text></View>
          <View style={{
            flexDirection: "row"
          }}>{
              requireItems?.map((item) => {

                return <RequirementItem item={item} />
              })
            }</View>

          <View style={{
            marginTop: SIZES.padding
          }}>
            {
              requireItems.map((item) => {
                return <RequirementItemDetail item={item} />
              })
            }
          </View>
        </View>
        {/* Action */}

        <View style={styles.takeAction}>
          <View style={{
          }}>
            <TouchableOpacity style={{
              flexDirection: "row",
              backgroundColor: COLORS.green,
              borderTopRightRadius: SIZES.radiusBase,
              borderBottomRightRadius: SIZES.radiusBase,
              paddingHorizontal: SIZES.padding * 1.5,
              paddingVertical: SIZES.padding,
              alignItems: "center",
            }}><Text style={{
              ...FONTS.h4,
              color: COLORS.white,
              marginRight: SIZES.padding / 3
            }}>Take Action</Text><Image style={{
              width: 10,
              height: 10,
              resizeMode: "contain"
            }} source={icons.chevron}></Image></TouchableOpacity>
          </View>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: SIZES.padding,
            width: "30%"
          }}>
            <Text style={{
              ...FONTS.body4,
              color: COLORS.gray,
              marginRight: SIZES.padding / 3
            }}>Almost 2 weeks of growing time</Text>
            <Image style={{
              width: 15,
              height: 15,
              resizeMode: "contain"
            }} source={icons.downArrow} />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    padding: SIZES.padding,
    width: "100%",
    zIndex: 999,
    ...Platform.select({
      ios: {
        top:30
        
      },
      android: {
        top: 0,
       }
    })


  },
  bannerPhoto: {
    height: '35%',

  },
  requirements: {
    flex: 1,
    marginTop: -40,
    backgroundColor: COLORS.lightGray,
    borderTopStartRadius: SIZES.radiusLarge,
    borderTopRightRadius: SIZES.radiusLarge,
  },
  takeAction: {
    flexDirection: 'row',
    marginTop: SIZES.padding
  }
})