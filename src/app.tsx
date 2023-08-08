import { Section } from "./components/section";
import { Layout } from "./layout";
import { ROUTES } from "./routes";

export const App = () => {
  return (
    <Layout>
      {ROUTES.map((route) => {
        return <Section id={route.id}>{route.component}</Section>;
      })}
    </Layout>
  );
};
