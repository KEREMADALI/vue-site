<template>
    <div class="photo-card-group">
        <div v-for="card in cards" :key="card.title" class="photo-card">
            <img :src="card.imageUrl" loading="lazy" alt="image">
            <div class="photo-card-metadata">
                <time datetime="2020-01-01">{{ card.date }}</time>
                <h2>{{ card.title }}</h2>
                <a href="">Read more</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    inject: ['cards']
};
</script>

<style>
.photo-card-group {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
}

.photo-card {
    display: flex;
    flex-direction: column;
    flex: 1;

    max-width: 570px;
    min-width: 400px;
    height: 431px;

    margin-right: 15px;
    margin-left: 15px;
    margin-bottom: 15px;

    border-radius: 15px;
    border: 1px solid transparent;

    box-shadow: 10px 10px 10px var(--shadow-color);
}

.photo-card:hover {
    border: 1px solid var(--dark-blue);
}

.photo-card img {
    object-fit: cover;

    height: 253px;
    width: 100%;

    border-radius: 15px 15px 0 0;
}

.photo-card-metadata {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 178px;

    text-align: left;

    margin: 24px 40px;
}

.cphoto-card-metadata time {
    font-size: 16px;
    font-weight: 200;
    color: var(--light-grey);
}

.photo-card-metadata h2 {
    font-size: 18px;
}

.photo-card-metadata a {
    font-size: 16px;
    text-decoration: none;
    color: var(--dark-blue);

}
</style>