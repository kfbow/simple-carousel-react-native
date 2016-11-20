# simple-carousel-react-native
A simple React Native carousel

![alt-tag](/SCRN.gif)

###How to use
Import the module and each child will be a page in the carousel.
```
import Carousel from 'simple-carousel-react-native';

<Carousel>
  <View>
    <Text>
      Page 1
    </Text>
  </View>
  
  <View>
    <Text>
      Page 2
    </Text>
  </View>
  
  <View>
    <Text>
      Page 3
    </Text>
  </View>
</Carousel>
```

If you would like to define some of the props:
```
<Carousel
  color='#00FFFF'
  showScroll={ true } />
  
  <View><Text>Page 1</Text></View>
  
</Carousel>
```

###API
  *(Type, Default)*
  * **bubbleHeight** - (Number, 10) - The height of the bubble indicator.
  * **bubbleWidth** - (Number, 10) - The width of the bubble indicator.
  * **color** - (String, '#ffa500') - The color of the highlighted bubble indicator.
  * **dimmedColor** - (String, '#d3d3d3') - The color of the dimmed out bubble indicators.
  * **height** - (Number, 350) - The height of the carousel.
  * **showBubbles** - (Boolean, true) - Show the bubble indicators.
  * **showScroll** - (Boolean, false) - Show the native scroll bar.
