import Markdown from '../components/Markdown';

export default class Page extends Markdown {
  document = () => {
    return {
      document: require('../../components/badge/demo.md'),
      className: 'badge-page',
    };
  }
}
