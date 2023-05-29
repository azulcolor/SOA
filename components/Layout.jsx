import Header from "./Header";

export default function Layout({children}) {
    return (
        <div style={{margin: '2vh 3vw'}}>
            <Header />
            {children}
        </div>
    )
}