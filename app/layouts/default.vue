<template>
  <div class="fixed inset-0 flex flex-col">
	  <LayoutHeader></LayoutHeader>
	  <LayoutMain>
		  <div class="w-full max-w-[1200px] mx-auto p-4 box-border" :style="{
			  minHeight: $route.fullPath === '/' ? 'calc(100% - 3.5rem)' : '100%',
			  height: $route.fullPath === '/' ? 'auto' : '100%',
		  }">
			  <slot />
		  </div>
		  <LayoutFooter v-if="$route.fullPath === '/'"></LayoutFooter>
	  </LayoutMain>
  </div>
</template>