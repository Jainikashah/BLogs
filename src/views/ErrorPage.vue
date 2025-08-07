<template>
    <div class="error-page">
        <faIcon class="red-text-color fs-3 mb-2" :icon="['fas', 'circle-exclamation']" />
        <span class="pt-0  fs-1 mb-2 red-text-color"> PAGE NOT FOUND</span>
        <p class="fs-1">Sorry, but looks like you ended up at the wrong place. </p>
        <hr class="width-10">
        <button @click="redirectToDashboard" class=" bg-dark-red text-white fs-08 btn btn-transparent px-5 border-red mt-05">uh no! Take me back.</button>
    </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
    name: "ErrorPage",
    setup(){
    const router = useRouter();

        const redirectToDashboard = () => {
            router.push({ name: "UserDashboard" })
        }
        return{
            redirectToDashboard
        }
    }
}
</script>