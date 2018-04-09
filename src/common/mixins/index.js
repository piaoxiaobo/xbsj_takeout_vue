/*
包含vue组件所有mixin的模块
 */

export const ratingsMixin = { // 所有vue组件中的配置选项
  data () {
    return {
      selectType: 0,
      onlyContent: true
    }
  },
  computed: {
    filterRatings () {
      const {selectType, onlyContent} = this
      const ratings = this.shopRatings || this.food.ratings
      if(!ratings) { // 如果此时ratings没有值, 直接返回一个[]
        return []
      }

      return ratings.filter(rating => {
        const {rateType, text} = rating
        // 条件1:
        // selectType: 0/1/2
        // rateType: 0/1
        // selectType===2 || selectType===rateType
        // 条件2:
        // onlyContent: true/false
        // text: 有值/没值
        // !onlyContent || text.length>0

        return (selectType===2 || selectType===rateType) && (!onlyContent || text.length>0)
      })
    }
  },

  methods: {
    setSelectType (selectType) {
      this.selectType = selectType
    },

    toggleOnlyContent () {
      this.onlyContent = !this.onlyContent
    },
  },
}