<template>
    <div class="card h-100 one-card text-bg-dark border-white">
        <img :src="getCardImg" class="card-img-top" :alt="cardData.title">
        <div class="card-body">
            <h5 class="card-title">{{ cardData.title }}</h5>
            <p class="card-text">{{ cardData.description }}</p>
            <p class="card-text"> {{ cardData.type?.name }}</p>
            <p class="card-text">
                <span v-for="technology in cardData.technologies" class="badge rounded-pill text-bg-secondary me-1">
                    {{ technology.name }}
                </span>
            </p>

        </div>
    </div>
</template>

<script>
import { store } from '../store/store';

export default {
    name: 'ProjectCard',
    data() {
        return {
            store,
        }
    },
    computed: {
        getCardImg() {
            let cardData = this.cardData;

            let imgUrl = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.se3DXw-mPQ4LPJvFU33pQgAAAA%26pid%3DApi&f=1&ipt=7d8cb4465c589eff3cc9edf536fc8d09f08e533e5dc744595f6acbe65fc7a9e9&ipo=images';
            if (cardData.cover_image) {
                imgUrl = cardData.cover_image;
                if (imgUrl.substring(0, 5) == 'cover') {
                    imgUrl = `${this.store.axiosGetObject.baseURL}/storage/${imgUrl}`;
                }
            }
            return imgUrl
        }
    },
    props: {
        cardData: Object,
    }
}
</script>

<style scoped lang="scss"></style>