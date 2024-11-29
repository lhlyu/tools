<template>
	<div class="flex flex-col gap-4 h-full">
		<Tabs class="h-6" v-model="enc">
			<TabsList class="w-full">
				<TabsTrigger v-for="(v, k, i) in encodes" :value="k" :key="k">
					{{ k.charAt(0).toUpperCase() + k.slice(1).toLowerCase() }}
				</TabsTrigger>
			</TabsList>
		</Tabs>
		<Textarea class="flex-1 h-full bg-background resize-none" :placeholder="$t('pages.encode.input')" v-model="strIn"></Textarea>
		<div class="flex items-center justify-center flex-shrink-0 w-full h-6 gap-1">
			<Select v-model="mode">
				<SelectTrigger class="w-[100px]">
					<SelectValue placeholder="Select a timezone" />
				</SelectTrigger>
				<SelectContent class="h-[200px]">
					<SelectItem v-for="v in encodes[enc]" :value="v" :key="v">
						{{ v }}
					</SelectItem>
				</SelectContent>
			</Select>
			<Button variant="outline" @click="encode">
				{{ $t('pages.encode.encode') }}
			</Button>
			<Button variant="outline" @click="decode">
				{{ $t('pages.encode.decode') }}
			</Button>
			<Button variant="outline" @click="copy(strOut)">
				<CopyCheck v-if="copied"></CopyCheck>
				<Copy v-else></Copy>
			</Button>
		</div>
		<Textarea class="flex-1 h-full bg-background resize-none" :placeholder="$t('pages.encode.output')" v-model="strOut"></Textarea>
	</div>
</template>

<script setup lang="ts">
import { Copy, CopyCheck } from 'lucide-vue-next'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import {useClipboard} from "@vueuse/core";

const { encodes, enc, mode, strIn, strOut, encode, decode } = useEncodePage()

const { copy, copied } = useClipboard({
	source: strOut,
	copiedDuring: 2000,
})
</script>
