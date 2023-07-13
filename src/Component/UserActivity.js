import { Fragment } from "react"


export const UserActivity=(props)=>{
    return<Fragment>
        <div>
            <h1>Hello</h1>
        {props.children}
        </div>
    </Fragment>
}