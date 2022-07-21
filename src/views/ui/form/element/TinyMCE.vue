<template>
  <rs-layout>
    <rs-breadcrumb />
    <rs-card>
      <template #header> Info </template>
      <template #body>
        <p class="text-justify mb-4">
          <a
            href="https://www.tiny.cloud"
            target="_blank"
            class="hover:underline text-primary-400"
            >TinyMCE</a
          >
          is a WYSIWYG editor that can be used to create content in a visual
          manner. It is a fully-featured editor that can be used to create
          content in a visual manner. To use this editor, you need to
          <a
            href="https://www.tiny.cloud/auth/signup"
            target="_blank"
            class="hover:underline text-primary-400"
            >signup</a
          >
          for a free account and if use for commercial purposes, you need to
          purchase a license. You can use this editor in a free or commercial
          environment.
        </p>

        <FormKit
          type="text"
          label="TinyMCE Key"
          :value="apiKey"
          help="If the key is missing, you must first sign up for Tinymce and then add it to the.env file."
          readonly
        />
      </template>
    </rs-card>

    <rs-card>
      <template #header> How to use? </template>
      <template #body>
        <p class="mb-4">
          There are editor configuration options that can be used to customize
          the editor. For example, you can set the editor language, the editor
          theme, the editor toolbar, the editor plugins, etc. The editor
          configuration options are available in the editor configuration
          object. see this link for more information:
          <a
            href="https://www.tiny.cloud/docs/integrations/vue/#configuringtheeditor"
            target="_blank"
            class="hover:underline text-primary-400"
            >https://www.tiny.cloud/docs/integrations/vue/#configuringtheeditor</a
          >
        </p>

        <div class="mb-4">
          <label
            for="country"
            class="text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm"
            >Advanced List</label
          >
          <editor
            :api-key="apiKey"
            :init="{
              height: 300,
              plugins: 'lists advlist',
            }"
          />
        </div>
      </template>
    </rs-card>
  </rs-layout>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";

export default {
  name: "form-element-input-tinymce",
  components: {
    Editor,
  },
  setup() {
    return {
      apiKey: process.env.VUE_APP_TINYMCE_KEY,
    };
  },
};
</script>

<style lang="scss" scoped></style>
