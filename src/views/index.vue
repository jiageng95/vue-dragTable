<template>
    <div class="index">
        <drag-table :tableData="answerData" :rowData="rowData" tablekey="q_id" @sortHandle="sortHandle"></drag-table>
    </div>
</template>

<script>
import DragTable from '@/components/DragTable'
export default {
    data () {
        return {
            answerData: [
                {
                    q_id: 10,
                    title: '111111111',
                    correct_answer: 'A'
                },
                {
                    q_id: 11,
                    title: '222222222',
                    correct_answer: 'B'
                },
                {
                    q_id: 12,
                    title: '333333333',
                    correct_answer: 'C'
                },
                {
                    q_id: 13,
                    title: '444444444',
                    correct_answer: 'D'
                }
            ],
            rowData: [
                {
                    title: 'id',
                    value: 'q_id'
                },
                {
                    title: '题目内容',
                    value: 'title'
                },
                {
                    title: '正确答案',
                    value: 'correct_answer'
                }
            ]
        }
    },
    components: {
        DragTable
    },
    mounted () {

    },
    methods: {
        sortHandle (val) {
            console.log('排序后的操作');
            console.log(val);
        }
    }
}
</script>

<style>

</style>
