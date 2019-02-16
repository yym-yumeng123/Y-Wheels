<template>
  <div>
    <y-button>
      <y-icon name="left"></y-icon>
    </y-button>
    <y-button>
      <y-icon name="right"></y-icon>
    </y-button>
    <y-button>
      <y-icon name="down"></y-icon>
    </y-button>
    <y-button>
      <y-icon name="dots"></y-icon>
    </y-button>
    <y-button>
      <y-icon name="error"></y-icon>
    </y-button>
    <y-button>
      <y-icon name="info"></y-icon>
    </y-button>
    <y-button>
      <y-icon name="loading"></y-icon>
    </y-button>
    <y-button>
      <y-icon name="download"></y-icon>
    </y-button>
    <y-button>
      <y-icon name="thumbs-up"></y-icon>
    </y-button>
    <y-button>
      <y-icon name="settings"></y-icon>
    </y-button>
  </div>
</template>

<script>
import YButton from "../../../src/button/button";
import YIcon from "../../../src/icon/icon";
export default {
	components: {
    YButton,
    YIcon
  }
};
</script>
