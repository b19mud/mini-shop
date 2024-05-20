
export function Post(req_url: string, req_data: any) {
    return new Promise((resolve, rejact)=>{
        wx.request({
            url: req_url,
            method: "POST",
            data: req_data,
            header: {
              'content-type': 'application/json' // 默认值
            },
            success (res) {
              resolve(res)
            },
            fail (err) {
              rejact(err)
            }
          })
    })
}