app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `
    <div class="review-container">
    <h3>Reviews: </h3>
    <ul>
        <li v-for="(review, index) in reviews" :key="index">
        {{ review.name }} gave this {{ review.rating }} stars
        <br/>
        "{{ review.review }}"
        </li>
    </ul>
    
    <!-- Solutions -->
    <h3>Recommends: </h3>
    
    <ul>
        <li v-for="(recommend, index) in recommends" :key="index">
        {{ review.name }} recommend this product.
        <br/>
        "{{ recommend.recommend }}"
        </li>
    </ul>  
    </div>
    `
})