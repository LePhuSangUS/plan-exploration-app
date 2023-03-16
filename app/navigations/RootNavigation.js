import React from "react"
export const navigationRef = React.createRef(null); // You can also use a regular ref with `React.useRef()`

export const navigate = (name,params) => {
    if (navigationRef?.current) {
        navigationRef.current.navigate(name.params)
    }
}
