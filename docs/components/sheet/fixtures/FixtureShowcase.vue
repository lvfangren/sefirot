<template>
  <SSheet v-slot="{ close }">
    <SSheetHeader>
      <SSheetHeaderTitle>
        Sheet title
      </SSheetHeaderTitle>
    </SSheetHeader>

    <SSheetMedium>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </p>

      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </SSheetMedium>

    <SSheetFooter>
      <SSheetFooterActions>
        <SSheetFooterAction type="mute" label="CANCEL" @click="close" />
        <SSheetFooterAction type="primary" mode="info" label="CLOSE SHEET" @click="close" />
      </SSheetFooterActions>
    </SSheetFooter>
  </SSheet>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Sheet from '@@/lib/mixins/Sheet'

export default defineComponent({
  mixins: [Sheet()]
})
</script>
