<template>
  <rs-layout>
    <rs-breadcrumb />
    <rs-card>
      <template #header> Default </template>
      <template #body>
        <FormKit type="password" label="Password" />
      </template>
    </rs-card>

    <rs-card>
      <template #header> Validation </template>
      <template #body>
        <FormKit
          type="password"
          label="Password"
          validation="matches:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/"
          :validation-messages="{
            matches:
              'The password must contain at least one uppercase letter, one lowercase letter, one digit, one special character and should have 8 characters long.',
          }"
        />
        <FormKit
          type="password"
          label="Strong Meter Password"
          v-model="password"
        >
          <template #messages>
            <ul
              v-if="score < 3 && password !== ''"
              class="formkit-messages list-none p-0 mt-1 mb-0"
            >
              <li class="formkit-message text-red-500 mb-1 text-xs">
                Password strength must be at least safe level.
              </li>
            </ul>
          </template>
        </FormKit>
        <div class="flex" v-if="score < 3 && password !== ''">
          <span class="text-rose-400 font-semibold">{{ strength }}</span>
          <password-meter
            class="ml-3 h-full"
            @score="onScore"
            :password="password"
          />
        </div>
      </template>
    </rs-card>

    <rs-card>
      <template #header> Confirmation </template>
      <template #body>
        <FormKit type="group">
          <FormKit
            type="password"
            name="password"
            label="Password"
            help="Enter a new password"
            validation="required"
            validation-visibility="live"
          />
          <FormKit
            type="password"
            name="password_confirm"
            label="Confirm password"
            help="Confirm your new password"
            validation="required|confirm"
            validation-visibility="live"
            validation-label="Password confirmation"
          />
        </FormKit>
      </template>
    </rs-card>
  </rs-layout>
</template>

<script>
import { ref } from "vue";
import PasswordMeter from "vue-simple-password-meter";
import RsCard from "@/components/Card.vue";

export default {
  name: "form-element-input-password",
  components: {
    RsCard,
    PasswordMeter,
  },
  setup() {
    const password = ref("");
    const score = ref(null);
    const strength = ref(null);

    const onScore = (payload) => {
      strength.value = payload.strength;
      score.value = payload.score;
    };
    return {
      password,
      onScore,
      score,
      strength,
    };
  },
};
</script>

<style lang="scss" scoped></style>
