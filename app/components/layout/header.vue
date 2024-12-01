<template>
	<header class="sticky top-0 flex flex-shrink-0 items-center h-16 border-b bg-background">
		<div class="flex items-center justify-between w-full max-w-[1200px] px-4 box-border mx-auto">
			<div class="flex items-center gap-2 cursor-pointer" @click="toHome">
				<Wrench class="h-5 w-5" />
				<span class="font-bold">{{ $t('title') }}</span>
			</div>
			<div class="flex">
				<Button variant="ghost" size="icon" @click="toGithub">
					<Github></Github>
				</Button>
				<DropdownMenu>
					<DropdownMenuTrigger as-child>
						<Button variant="ghost" size="icon">
							<Languages></Languages>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuRadioGroup v-model="locale">
							<DropdownMenuRadioItem value="zh">
								<span>简体中文</span>
								<DropdownMenuShortcut>
									zh
								</DropdownMenuShortcut>
							</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value="en">
								<span>English</span>
								<DropdownMenuShortcut>
									en
								</DropdownMenuShortcut>
							</DropdownMenuRadioItem>
						</DropdownMenuRadioGroup>
					</DropdownMenuContent>
				</DropdownMenu>
				<ColorScheme placeholder="">
					<Button variant="ghost" size="icon" @click="toggleThemeMode">
						<Sun v-if="colorMode.preference === 'dark'" />
						<Moon v-else />
					</Button>
				</ColorScheme>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
import { Wrench, Sun, Moon, Languages, Github } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const { locale } = useI18n()

const colorMode = useColorMode()

const toggleThemeMode = () => {
    if (colorMode.preference === 'dark') {
        colorMode.preference = 'light'
    } else {
        colorMode.preference = 'dark'
    }
}

const toHome = () => {
    navigateTo('/')
}

const toGithub = () => {
    window.open(`https://github.com/lhlyu/tools`, '_blank')
}
</script>