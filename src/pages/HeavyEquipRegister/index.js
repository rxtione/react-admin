import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import {Input, Label, Button, FormGroup} from 'reactstrap'
import * as yup from "yup";
import * as equipActions from 'store/modules/equip'

import HeavyEquipForm from './style.js'

/* 라우터 주소 테스트용 컴포넌트
*  인자 설명
*/
const HeavyEquipRegister = () => {
    /* 메세지 전달 */
    const {status} = useSelector(state => state.equip);
    const dispatch = useDispatch();

    const schema = yup.object().shape({
        code: yup.string().required(),
        name: yup.string().required(),
        model_name: yup.string().required(),
        car_number: yup.string().required(),
        car_identify: yup.string().required(),
        manufacturer: yup.string(),
        car_year: yup.number(),
        uptime: yup.number()
    });

    const { register, handleSubmit, errors, control, reset } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            type: 'equip',
            useyn: 'Y',
            construction: 'anyang'
        }
    });

    if ( status == 'success') {
        dispatch(equipActions.changeStatus('ready'));
        alert('성공');
        reset();
        return;
    }

    const onSubmit = (data) => {
        console.log(data);
        dispatch(equipActions.register(data));
    };

    return (
        <HeavyEquipForm>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h6>장비 관리</h6>

                <table className="table table-bordered">
                    <colgroup>
                        <col width="15%"/>
                        <col width="35%"/>
                        <col width="15%"/>
                        <col width="35%"/>
                    </colgroup>
                    <tbody>
                        <tr>
                            <th>장비/차량</th>
                            <td>
                                <FormGroup className="m-checkbox-inline mb-0 custom-radio-ml">
                                    <div className="radio radio-primary">
                                        <Controller
                                            as={Input}
                                            name="type"
                                            type="radio"
                                            id="typeradio1"
                                            value="equip"
                                            defaultChecked
                                            control={control}
                                        />
                                        <Label className="mb-0" for="typeradio1">장비</Label>
                                    </div>
                                    <div className="radio radio-primary">
                                        <Controller
                                            as={Input}
                                            name="type"
                                            type="radio"
                                            id="typeradio2"
                                            value="car"
                                            control={control}
                                        />
                                        <Label className="mb-0" for="typeradio2">차량</Label>
                                    </div>
                                </FormGroup>
                            </td>
                            <th>사용여부</th>
                            <td>
                                <FormGroup className="m-checkbox-inline mb-0 custom-radio-ml">
                                    <div className="radio radio-primary">
                                        <Controller
                                            as={Input}
                                            name="useyn"
                                            type="radio"
                                            id="useradio1"
                                            value="Y"
                                            defaultChecked
                                            control={control}
                                        />
                                        <Label className="mb-0" for="useradio1">사용함</Label>
                                    </div>
                                    <div className="radio radio-primary">
                                        <Controller
                                            as={Input}
                                            name="useyn"
                                            type="radio"
                                            id="useradio2"
                                            value="N"
                                            control={control}
                                        />
                                        <Label className="mb-0" for="useradio2">사용안함</Label>
                                    </div>
                                </FormGroup>
                            </td>
                        </tr>
                        <tr>
                            <th>관리코드</th>
                            <td>
                                <input type="text" name="code" placeholder="Enter the code" type="text" className="form-control equipform-input" ref={register}/>
                                {errors.code && <p>{errors.name.code}</p>}
                            </td>
                            <th>시공현장</th>
                            <td>
                                <Controller
                                    as={
                                        <Input>
                                            <option value="phochen">포천</option>
                                            <option value="anyang">안양</option>
                                            <option value="uijengbu">의정부</option>
                                            <option value="cheonan">천안</option>
                                            <option value="busan">부산</option>
                                        </Input>
                                    }
                                    type="select"
                                    name="construction"
                                    className="form-control digits equipform-select"
                                    control={control}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>장비명</th>
                            <td>
                                <input type="text" name="name" placeholder="Enter the name" type="text" className="form-control equipform-input" ref={register}/>
                                {errors.name && <p>{errors.name.message}</p>}
                            </td>
                            <th>모델명</th>
                            <td>
                                <input type="text" name="model_name" placeholder="Enter the model name" type="text" className="form-control equipform-input" ref={register}/>
                                {errors.model_name && <p>{errors.model_name.message}</p>}
                            </td>
                        </tr>
                        <tr>
                            <th>등록번호</th>
                            <td>
                                <input type="text" name="car_number" placeholder="Enter the car number" type="text" className="form-control equipform-input" ref={register}/>
                                {errors.car_number && <p>{errors.car_number.message}</p>}
                            </td>
                            <th>차대번호</th>
                            <td>
                                <input type="text" name="car_identify" placeholder="Enter the car identify number" type="text" className="form-control equipform-input" ref={register}/>
                                {errors.car_identify && <p>{errors.car_identify.message}</p>}
                            </td>
                        </tr>
                        <tr>
                            <th>제조사</th>
                            <td>
                                <input type="text" name="manufacturer" placeholder="Enter the manufacturer" type="text" className="form-control equipform-input" ref={register}/>
                                {errors.manufacturer && <p>{errors.manufacturer.message}</p>}
                            </td>
                            <th>연식</th>
                            <td>
                                <input type="text" name="car_year" placeholder="Enter the car year" type="text" className="form-control equipform-input" ref={register}/>
                                {errors.car_year && <p>{errors.car_year.message}</p>}
                            </td>
                        </tr>
                        <tr>
                            <th>구입일</th>
                            <td>
                                <Controller
                                    as={Input}
                                    name="buy_date"
                                    type="date"
                                    defaultValue="2020-01-01"
                                    className="form-control digits equipform-input"
                                    control={control}
                                />
                                {errors.buy_date && <p>{errors.buy_date.message}</p>}
                            </td>
                            <th>구입가동시간</th>
                            <td>
                                <input type="text" name="uptime" placeholder="Enter the uptime" type="text" className="form-control equipform-input" ref={register}/>
                                {errors.uptime && <p>{errors.uptime.message}</p>}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="btn-wrap">
                    <Button type="submit" className="btn btn-primary mr-1">저장</Button>
                    <Button className="btn btn-light" type="reset" >목록</Button>
                </div>
            </form>
        </HeavyEquipForm>
    )
}

export default React.memo(HeavyEquipRegister)