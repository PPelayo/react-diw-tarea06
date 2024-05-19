import { cartSelector } from "@/redux/cardSlice"
import CartIcon from "../icons/CartIcon"
import { useSelector } from "react-redux"

function Cart() {
    const items = useSelector(cartSelector)

    return (
        <>
            <div style={{
                position: 'relative',
            }}>
                {items.length > 0 ?
                <span style={{
                    position: 'absolute',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--secundary-color)',
                    top: '0',
                    right: '0',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: '0',
                    margin: '0',
                }}>{
                    items.length > 9 ? '9+' : items.length
                }</span>
             : "" }
                <CartIcon sty={{
                    width: "42px",
                    height: "42px",
                }}/>
            </div>
        </>
    )
}

export default Cart