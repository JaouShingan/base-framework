<template>
    <Layout class="main-container">
        <Header>
            <div id="nav">
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link>
            </div>
        </Header>
        <Layout>
            <Sider>
				<SiderMenu />
            </Sider>
            <Layout>
                <Content>
                    <router-view />
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    </Layout>
</template>
<script>
import SiderMenu from '@components/SiderMenu';
export default {
    components: { SiderMenu }
};
</script>
<style lang="less">
html,
body,
.main-container {
    margin: 0;
    padding: 0;
    font-size: 14px;
    width: 100%;
    height: 100%;
}
</style>
