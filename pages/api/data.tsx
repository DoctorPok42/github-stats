export default async function Active(req: { body: any }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: { message: any }): void; new(): any } } }) {
    const { body } = req
    const data = JSON.parse(body)

    try {
        fetch(`https://api.github.com/users/${data.username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
                }
                })
            .then(res => res.json())
            .then(data => {
                res.status(200).send({ message: data })
            })
    } catch (error) {
        res.status(500).send({ message: error })
    }
}