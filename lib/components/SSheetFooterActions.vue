<template>
  <div class="SSheetFooterActions">
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
@import "@/assets/styles/variables";

.SSheetFooterActions {
  display: flex;
  justify-content: flex-end;
  padding: 12px 0 11px;
}

.SSheetFooterActions >>> .SSheetFooterAction + .SSheetFooterAction {
  padding-left: 8px;
}
</style>
