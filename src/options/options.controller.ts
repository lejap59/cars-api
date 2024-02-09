import { Controller, Get, HttpException, HttpStatus, Post , Param} from '@nestjs/common';
import { OPTIONS } from '../constants/options'

@Controller('options')
export class OptionsController {

	options = OPTIONS
	constructor() {}

	@Get()
	getiAllOptions(): 	 Record<string,any> {
		return this.options
	}
	
	@Get('/:opt')
	getOptions(@Param('opt') op:string): 	 Record<string,any> {
		return this.options[op]
	}
}
