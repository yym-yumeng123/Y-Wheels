const expect = chai.expect;
import Vue from 'vue'
import Slides from '../../src/slides/slides'

Vue.config.productionTip = false
Vue.config.devtools = false


describe('Slides.vue', () => {
    it('存在.', () => {
        expect(Slides).to.be.ok
    })
})

