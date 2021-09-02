import { GetServerSideProps } from 'next';
import App from '../App';
import { AppHead } from '../AppHead';

/**
 * This is a shim for now. Our app currently doesn't use
 * next routing - we're just loading the entire app in _app.tsx
 *
 * This will be fixed in a later PR, adding routes with server
 * rendering to grab OG images.
 */
const HomePage = () => {
  return (
    <>
      <AppHead
        title="XState Visualizer"
        ogTitle="XState Visualizer"
        description="Visualizer for XState state machines and statecharts"
        importElk
        importPrettier
        // TODO - get an OG image for the home page
        ogImageUrl={undefined}
      />
      <App />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return { props: { query: ctx.query } };
};

export default HomePage;
