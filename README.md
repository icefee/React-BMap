### React_BMap 百度地图 React组件集成

#### 当前支持的组件

- 地图(Map)
- 标记(Marker)
- 信息框(InfoWindow)
- 折线(Polyline)
- 上下文菜单(ContextMenu)


####地图(Map)
|  Prop | 类型 | 必需 | 默认值 | 描述 |
| ------------ | ------------ | ------------ | ------------ |
| ak | string | 是 | - | 开放平台申请的ak |
| center | Point | 是 | - | 地图初始的中心点坐标 |
| zoom | number | 是 | - | 地图初始的缩放 |
| onClick | (ev: Point) => void | 否 | - | 点击地图的回调 |

######调用例子
```jsx
    <BMap
        center={{ lng: 116.413387, lat: 39.910924 }}
        zoom={12}
        ak="E4805d16520de693a3fe707cdc962045"
        onClick={undefined}
    />
```

####标记(Marker)
|  Prop | 类型 | 必需 | 默认值 | 描述 |
| ------------ | ------------ | ------------ | ------------ |
| point | Point | 是 | - | 标记的坐标位置 |
| label | string &#124; html字符串 | 否 | - | 标记的标题 |
| dragable | boolean | 否 | false | 标记是否可以拖动 |
| onClick | (ev: MapEvent) =>void | 否 | - | 点击标记的回调 |
| eventStopPropagation | boolean | 否 | false | 是否阻止点击事件冒泡到地图 |
| onDragStart | (ev: MapEvent) => void | 否 | - | 标记开始拖动的回调 |
| onDragging | (ev: MapEvent) => void | 否 | - | 标记拖动的回调 |
| onDragEnd | (ev: MapEvent) => void | 否 | - | 标记停止拖动的回调 |

######调用例子
```jsx
    <BMap
          center={{ lng: 116.413387, lat: 39.910924 }}
          zoom={12}
          ak="E4805d16520de693a3fe707cdc962045">
         <Marker dragable={mapClick} point={{ lng: 116.413387, lat: 39.910924 }} />
    </BMap>
```

###### ref 可以通过ref获取到原始的marker对象

####信息框(InfoWindow)
|  Prop | 类型 | 必需 | 默认值 | 描述 |
| ------------ | ------------ | ------------ | ------------ |
| title | string &#124; html字符串 | 是 | - | 信息框的标题 |
| content | string  &#124; html字符串 | 是 | - | 信息框的内容 |
| width | number | 是 | - | 信息框的宽度 |
| height | numbser | 否 | auto | 信息框的高度 |
| defaultShow | boolean | 否 | false | 默认显示 |
| children | ReactElement | 是 | - | 信息框的触发元素(当前仅支持Marker) |

######调用例子
```jsx
<InfoWindow width={220} title="标题" content="内容">
     <Marker dragable point={{ lng: 116.413387, lat: 39.910924 }} />
</InfoWindow>
```

####折线(Polyline)
|  Prop | 类型 | 必需 | 默认值 | 描述 |
| ------------ | ------------ | ------------ | ------------ |
| points | Point[] | 是 | 否 | 构成这折线的坐标列表 |
| strokeColor | string | 否 | #3a6bdb | 折线的颜色 |
| strokeWeight | number | 否 | 5 | 折线的宽度 |
| strokeOpacity | number | 否 | 0.65 | 折线的透明度, 取值范围0-1 |
| strokeStyle | solid &#124; dashed | 否 | solid | 折线的样式 |

######调用例子
```jsx
<Polyline
        points={ [{ lng: 116.413387, lat: 39.910924 }, { lng: 116.413687, lat: 39.911924 }] }
    	strokeColor="green"
 />
```

####上下文菜单(ContextMenu & ContextMenuOption)
#####ContextMenu
|  Prop | 类型 | 必需 | 默认值 | 描述 |
| ------------ | ------------ | ------------ | ------------ |
| children | ContextMenuOption[] | 是 | - | 上下文菜单的选项列表 |
#####ContextMenuOption
|  Prop | 类型 | 必需 | 默认值 | 描述 |
| ------------ | ------------ | ------------ | ------------ |
| width | number | 否 | - | 菜单项的宽度 |
| children | string | 否 | - | 菜单项的内容, 不传渲染为分隔线 |
| disabled | boolean | 否 | false | 菜单项是否禁用 |
| onClick | () => void | 否 | - | 菜单项点击的回调 |

######调用例子
```jsx
    // 给地图BMap添加上下文菜单
    <BMap
         center={{ lng: 116.413387, lat: 39.910924 }}
         zoom={12}
         ak="E4805d16520de693a3fe707cdc962045"
         >
        <ContextMenu>
            <ContextMenuOption width={120} disabled>选项一</ContextMenuOption>
            <ContextMenuOption />
            <ContextMenuOption width={120}>删除</ContextMenuOption>
         </ContextMenu>
    </BMap>

    // 给标记Marker添加上下文菜单
    <Marker dragable point={{ lng: 116.413387, lat: 39.910924 }}>
        <ContextMenu>
            <ContextMenuOption width={120} disabled>选项一</ContextMenuOption>
            <ContextMenuOption />
            <ContextMenuOption width={120}>删除</ContextMenuOption>
         </ContextMenu>
    </Marker>
```