import { extendTheme } from '@chakra-ui/react';

// Global style overrides
import styles from './styles';

// Foundational style overrides
import fonts from './foundationals/fonts';

// Component style overrides
import Heading from './components/Heading';
import Tooltip from './components/Tooltip';

const overrides = {
  styles,
  fonts,
  components: {
    Heading,
    Tooltip,
  },
};

export default extendTheme(overrides);
