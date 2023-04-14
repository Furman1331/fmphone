import { defineComponent } from "vue";
import { config, type PhoneTypesLower } from "@/config/config";

export default defineComponent({
    data() {
        return {
            config
        }
    },
    computed: {
        type(): PhoneTypesLower {
            return this.config.type.toLowerCase() as PhoneTypesLower;
        },
    },
    created() {
        this.importStyle();
    },
    methods: {
        importStyle() {
            const extendedFilePath = this.$options.__file as string;
            const extendedFileDirectoryPath = extendedFilePath.slice(0, extendedFilePath.lastIndexOf('/'));

            import(/* @vite-ignore */ `${extendedFileDirectoryPath}/${this.$options.name}.${this.type}.less`);
        },
    },
})
