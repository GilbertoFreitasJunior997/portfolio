import { Section } from "./components/section";
import { Layout } from "./layout";
import { ROUTES } from "./routes";

export const App = () => {
  return (
    <Layout>
      {ROUTES.map((route) => {
        const label = route.hideLabel !== true ? route.label : undefined;
        return (
          <Section id={route.id} label={label}>
            {route.component}
          </Section>
        );
      })}
    </Layout>
  );
};
