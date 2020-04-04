import React from "react";
import { Layout } from "antd";
import Header from "./component/header";
import Footer from "./component/footer";
import { route } from "./router/index";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Layout className="page">
      <Header />
      <Layout.Content>
        <div className="wrap">
          <Switch>
            {route.map((item, index) => {
              return (
                <Route
                  path={item.path}
                  key={index}
                  exact={item.exact}
                  render={props => {
                    return item.render(props);
                  }}
                />
              );
            })}
          </Switch>
        </div>
      </Layout.Content>
      <Footer></Footer>
    </Layout>
  );
}

export default App;
