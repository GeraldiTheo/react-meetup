// CSS
import clasess from './Layout.module.css'

// Component
import MainNavigation from './MainNavigation'

function Layout(props){
    return <div>
        <MainNavigation />
        <main className={clasess.main} >
            {props.children}
        </main>
    </div>
}

export default Layout;