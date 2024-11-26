<template>
	<div class="flex flex-col gap-4 h-full">
		<Tabs default-value="base" class="h-6">
			<TabsList class="w-full">
				<TabsTrigger value="base">
					Base
				</TabsTrigger>
				<TabsTrigger value="url">
					Url
				</TabsTrigger>
				<TabsTrigger value="hex">
					Hex
				</TabsTrigger>
				<TabsTrigger value="unicode">
					Unicode
				</TabsTrigger>
			</TabsList>
		</Tabs>
		<Textarea class="flex-1 h-full bg-background resize-none" :placeholder="$t('pages.encode.input')"></Textarea>
		<div class="flex items-center justify-center flex-shrink-0 w-full h-6 gap-1">
			<Button>
				<Code></Code> Base64
			</Button>
			<Button variant="outline">
				{{ $t('pages.encode.encode') }}
			</Button>
			<Button variant="outline">
				{{ $t('pages.encode.decode') }}
			</Button>
			<Button variant="outline">
				<Copy></Copy>
			</Button>
		</div>
		<Textarea class="flex-1 h-full bg-background resize-none" :placeholder="$t('pages.encode.output')"></Textarea>
	</div>
</template>

<script setup lang="ts">
import { Code, Copy } from 'lucide-vue-next'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
	Tabs,
	TabsList,
	TabsTrigger,
} from '@/components/ui/tabs'



</script>
