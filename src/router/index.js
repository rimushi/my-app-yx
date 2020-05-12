import React, {Component} from 'react'
import { HashRouter,Switch,Route,Redirect } from 'react-router-dom'
import Login  from '.././components/Login'
import Page  from '.././components/Page'
import Detail  from '.././components/Detail'
import Page1  from '.././components/Page1'
import Page2  from '.././components/Page2'
import Page3  from '.././components/Page3'
import Page4  from '.././components/Page4'
import Page5  from '.././components/Page5'
import Page6  from '.././components/Page6'
import Page7  from '.././components/Page7'
import Page8  from '.././components/Page8'
import Page9  from '.././components/Page9'
import Page10  from '.././components/Page10'
import Page11  from '.././components/Page11'
import Page12  from '.././components/Page12'
import Page13  from '.././components/Page13'
import Page14  from '.././components/Page14'
import Page15  from '.././components/Page15'
import Page16  from '.././components/Page16'
import Page17  from '.././components/Page17'
import Page18  from '.././components/Page18'
import Page19  from '.././components/Page19'
import Demo1  from '.././components/Demo1'
import Demo2  from '.././components/Demo2'
import HomeLayout  from '.././components/HomeLayout'

export default class RouteConfig extends Component {
    render () {
        return (
            <HashRouter>  
              	<Switch> 
                	<Route path="/" exact component={Login} /> 
                    <Route path="/login" exact component={Login} />
                    {/*这里的嵌套路由用父组件的方式比switch的好处就是不会有空的无意义的路由出现*/} 
                    <HomeLayout>
                        <div>
                            <Route path="/page" exact component={Page}/>
                            <Route path="/page/:id" component={Detail} />
                            <Route path="/page1" component={Page1}/> 
                            <Route path="/page2" component={Page2}/> 
                            <Route path="/page3" component={Page3}/> 
                            <Route path="/page4" component={Page4}/>
                            <Route path="/page5" component={Page5}/>
                            <Route path="/page6" component={Page6}/>  
                            <Route path="/page7" component={Page7}/>    
                            <Route path="/page8" component={Page8}/> 
                            <Route path="/page9" component={Page9}/> 
                            <Route path="/page10" component={Page10}/>
                            <Route path="/page11" component={Page11}/>
                            <Route path="/page12" component={Page12}/>
                            <Route path="/page13" component={Page13}/>
                            <Route path="/page14" component={Page14}/>
                            <Route path="/page15" component={Page15}/>
                            <Route path="/page16" component={Page16}/> 
                            <Route path="/page17" component={Page17}/>
                            <Route path="/page18" component={Page18}/> 
                            <Route path="/page19" component={Page19}/> 
                            <Route path="/demo1" component={Demo1}/>
                            <Route path="/demo2" component={Demo2}/>              
                        </div>
                    </HomeLayout>
                    <Redirect to="/" />
                </Switch>
            </HashRouter>
        )
    }
}
