<template>
  <!-- eslint-disable -->

  <div :class="context.classes.dropzone">
    <div v-bind="getRootProps()" class="cursor-pointer">
      <input v-bind="getInputProps()" :accept="accept" />
      <div class="flex items-center justify-center h-36">
        <div>
          <font-awesome-icon
            class="block m-auto mb-3"
            :icon="['fa', 'file-arrow-up']"
            size="4x"
          />
          <p class="text-center" v-if="isDragActive">Drop the files here ...</p>
          <p v-else>Drop files or click here to upload files</p>
        </div>
      </div>
    </div>
    <div v-if="files.length > 0" class="grid grid-cols-4 gap-4">
      <div
        v-for="(value, index) in files"
        class="relative w-36 h-36 border-2 p-4 rounded-lg overflow-hidden"
      >
        {{ value.path }}
        <vue-feather type="x" class="absolute top-1 right-1" size="18" />
      </div>
    </div>
  </div>
  <!-- <button @click="open">open</button> -->
</template>

<script setup>
/* eslint-disable */
import { ref } from "vue";
import { useDropzone } from "vue3-dropzone";

const props = defineProps({
  context: Object,
});

const files = ref([]);
const accept = props.context.accept;
const multiple = props.context.multiple;
const maxSize = props.context.maxSize;
const minSize = props.context.minSize;
const maxFiles = props.context.maxFiles;
const disabled = props.context.disabled;

const options = {
  accept,
  multiple: multiple === "true" ? true : false,
  maxSize: maxSize ? maxSize : Infinity,
  minSize: minSize ? minSize : 0,
  maxFiles: maxFiles ? maxFiles : 0,
  disabled: disabled === "true" ? true : false,
};

function onDrop(acceptFiles, err) {
  console.log(acceptFiles);
  console.log(err);
  if (err.length == 0) files.value.push(...acceptFiles);

  console.log("files.value", files.value);
}

const { getRootProps, getInputProps, isDragActive } = useDropzone({
  onDrop,
  maxFiles: 1,
});
</script>
