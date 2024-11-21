<template>
	<div class="dropdown"  @mouseleave="hide">
		<div class="action" @mouseenter="show">
			<slot name="action"></slot>
		</div>
		
		<transition name="dropdown">
			<div v-if="isOpen" class="content" @mouseenter="show">
				<ul>
					<li
						v-for="(item) in items"
						:key="item.value"
						@click="change(item.value)"
						:class="{ 'selected': selected === item.value }"
					>
						{{ item.label }}
					</li>
				</ul>
			</div>
		</transition>
	</div>
</template>

<script setup lang="ts">
defineProps({
    items: Array,
    selected: String | Number,
})

const emit = defineEmits(['change'])

const isOpen = ref(false)

const change = (value: unknown) => {
    emit('change', value)
    isOpen.value = false
}

let timer

const show = () => {
    clearTimeout(timer)
    isOpen.value = true
}

const hide = () => {
    timer = setTimeout(() => {
        isOpen.value = false
    }, 100)
}

onBeforeUnmount(() => {
    clearTimeout(timer)
})
</script>

<style scoped lang="scss">
.dropdown {
	position: relative;
	
	.action {
		background-color: var(--t-header-bg-color);
		font-size: 14px;
		color: var(--t-text-color);
		cursor: pointer;
		transition: all 0.3s;
		
		&:hover {
			color: var(--t-primary-color);
		}
	}
	
	.content {
		position: absolute;
		top: 100%;
		left: -120%;
		width: 140px;
		height: auto;
		margin-top: 4px;
		z-index: 10;
		border-radius: 12px;
		padding: 12px;
		min-width: 128px;
		border: 1px solid var(--t-divider-color);
		background-color: var(--t-elv-bg-color);
		box-shadow: var(--t-shadow-3);
		transition: background-color 0.3s;
		
		ul {
			list-style-type: none;
			
			li {
				cursor: pointer;
				display: block;
				border-radius: 4px;
				padding: 0 12px;
				line-height: 32px;
				font-size: 14px;
				font-weight: 500;
				color: var(--t-text-color);
				white-space: nowrap;
				transition: background-color 0.3s, color 0.3s;
				
				&:hover,
				&.selected {
					color: var(--t-selected-color);
					background-color: var(--t-hover-bg-color);
				}
				
				&.selected {
					font-weight: 600;
					background-color: var(--t-selected-bg-color);
				}
			}
		}
	}
}

.dropdown-enter-active,
.dropdown-leave-active {
	transition: all 0.3s;
}

.dropdown-enter-from,
.dropdown-leave-to {
	opacity: 0;
	transform: translateY(-10px);
}
</style>