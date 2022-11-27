import './app.css';
import {
  EuiEmptyPrompt,
  EuiButton,
  EuiTitle,
  EuiLink,
  EuiButtonEmpty
} from '@elastic/eui';
import illustration from './opensearch_mark_default.svg';
import '@elastic/eui/dist/eui_theme_light.css';


function App() {
    return (
      <EuiEmptyPrompt
    icon={<img src={illustration} alt="" width={40}/>}
    title={<h2>Welcome</h2>}
    body={<p>OpenSearch Playground serves as a live demo environment of OpenSearch and OpenSearch Dashboards where you can explore OpenSearch</p>}
    actions={[
      <EuiButton color="primary" fill>
        Explore
      </EuiButton>,
      <EuiLink href="https://github.com/opensearch-project/dashboards-anywhere" target="_blank">
      Checkout our code base
      </EuiLink>
    ]
  }
  />
  );
  
  }
  
  export default App;
  